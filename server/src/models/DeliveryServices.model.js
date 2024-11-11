import { Schema, model } from 'mongoose';

// Định nghĩa schema cho DeliveryStatus
const deliveryServicesSchema = new Schema(
    {
        Services_ID: { type: String, required: true, unique: true },
        Services_Name: { type: String, required: true },
        Services_Price: { type: Number, required: true },
        Services_Time: { type: String, required: true },
    },
    { collection: 'DeliveryServices' } // Đảm bảo dùng đúng collection trong MongoDB
);

// Tạo model từ schema
const DeliveryServices = model('DeliveryServices', deliveryServicesSchema);

// Xuất model bằng module.exports
export default DeliveryServices;
