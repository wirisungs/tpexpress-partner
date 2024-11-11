import Order from '../models/Order.model.js';
import DeliveryServices from '../models/DeliveryServices.model.js';
import Partner from '../models/Partner.model.js';
import User from '../models/User.model.js';
import DeliveryStatus from '../models/DeliveryStatus.model.js';

// Generate order id
function generateOrderId(length = 10) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let orderId = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    orderId += chars[randomIndex];
  }
  return orderId;
};

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error getting orders:', error);
        res.status(500).json({ message: 'Error getting orders', error: error.message });
    }
}

// Get orders by delivery status and partnerId
export const getOrderByStatusAndPartnerId = async (req, res) => {
    const { status } = req.params;
    const { partnerId } = req.user; // Get partnerId from token
    try {
        const orders = await Order.find({ orderStatus: status, orderPartner: partnerId });
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error getting orders:', error);
        res.status(500).json({ message: 'Error getting orders', error: error.message });
    }
}

export const createOrder = async (req, res) => {
    try {
        const { partnerId } = req.user; // Get partnerId from token
        const {
            senderAddress,
            receiverPhone,
            receiverName,
            receiverAddress,
            orderType,
            orderIsFragile,
            orderNote,
            orderCOD,
            dservicesId,
            totalPrice,
            paymentId,
            orderStatusId,
            driverId,
            createdDate,
            deliverPrice,
            proofSuccess,
            reasonFailed,
        } = req.body;

        const newOrder = new Order({
            orderId: generateOrderId(),
            cusId: partnerId,
            senderAddress,
            receiverPhone,
            receiverName,
            receiverAddress,
            orderType,
            orderIsFragile,
            orderNote,
            orderCOD,
            dservicesId,
            totalPrice,
            paymentId,
            orderStatusId,
            driverId,
            createdDate,
            deliverPrice,
            proofSuccess,
            reasonFailed,
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        console.log('Error creating order:', error);
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};
