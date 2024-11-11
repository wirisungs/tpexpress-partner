import { Schema, model } from 'mongoose';

// Định nghĩa schema cho DeliveryStatus
const paymentSchema = new Schema(
    {
        Pay_ID: { type: String, required: true, unique: true },
        Pay_Name: { type: String, required: true },
    },
    { collection: 'PaymentMethod' } // Đảm bảo dùng đúng collection trong MongoDB
);

// Tạo model từ schema
const PaymentMethod = model('PaymentMethod', paymentSchema);

// Xuất model bằng module.exports
export default PaymentMethod;
