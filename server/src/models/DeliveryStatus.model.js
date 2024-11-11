import { Schema, model } from 'mongoose';

// Định nghĩa schema cho DeliveryStatus
const deliveryStatusSchema = new Schema(
  {
    statusId: { type: String, required: true, unique: true },
    statusName: { type: String, required: true },
  },
  { collection: 'DeliveryStatus' } // Đảm bảo dùng đúng collection trong MongoDB
);

// Tạo model từ schema
const DeliveryStatus = model('DeliveryStatus', deliveryStatusSchema);

// Xuất model bằng module.exports
export default DeliveryStatus;
