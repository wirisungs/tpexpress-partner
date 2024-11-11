import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';
import bcrypt from 'bcrypt';
import Partner from '../models/Partner.model.js';
import dotenv from 'dotenv';
dotenv.config();

const generateUserId = async () => {
    const prefix = "ND";
    let isUnique = false;
    let userId = "";

    while (!isUnique) {
        const random = Math.floor(10000000 + Math.random() * 90000000);
        userId = `${prefix}${random}`;
        const existingUser = await User.findOne({ userId });
        if(!existingUser) {
          isUnique = true;
        }
    }

    return userId;
};

const generatePartnerId = async () => {
    const prefix = "DT";
    let isUnique = false;
    let partnerId = "";

    while (!isUnique) {
        const random = Math.floor(10000000 + Math.random() * 90000000);
        partnerId = `${prefix}${random}`;
        const existingPartner = await Partner.findOne({ partnerId });
        if(!existingPartner) {
          isUnique = true;
        }
    }

    return partnerId;
}

export const loginUser = async (req, res) => {
  const { phone, password } = req.body;

  try {
    const user = await User.findOne({ userPhone: phone });
    if (!user) {
    return res.status(404).json({ message: 'User not found' });
    }

    if (user.userRole !== 'Partner') {
    return res.status(403).json({ message: 'Access denied. Only partners can login' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.userPassword);
    if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user.userId, role: user.userRole }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

export const registerUser = async (req, res) => {
    const { phone, password, email, name } = req.body;

    if(!phone || !password || !email || !name ) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: 'Phone number must be exactly 10 digits' });
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number' });
    }
    try {
        const existingUser = await User.findOne({ userPhone: phone });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const userId = await generateUserId();
        const partnerId = await generatePartnerId();
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            userId,
            userPhone: phone,
            userPassword: hashedPassword,
            userStatus: 'active',
            userRole: 'Partner',
            userEmail: email
        });

        await newUser.save();

        const newPartner = new Partner({
            partnerId,
            partnerName: name,
            partnerPhone: phone,
            partnerEmail: email,
        });
        await newPartner.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
}

export const logoutUser = async (req, res) => {
  try {
    return res.status(200).json({ message: 'User logged out' });
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const verifyToken = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    // Verify token
    jwt.verify(token, 'secret');
    return res.status(200).json({ message: 'Token verified' });
  }
  catch {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}
