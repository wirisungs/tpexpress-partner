import dotenv from 'dotenv';
dotenv.config();
import { connect } from 'mongoose';

const mongoURI = process.env.MONGO_URI;

const db = async () => {
  try {
    await connect(mongoURI, {});

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default db;
