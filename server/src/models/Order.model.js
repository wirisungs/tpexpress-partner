import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  orderId: { type: String, required: true, unique: true }, // Khóa chính
  partnerId: { type: String, ref: 'Partner' },
  senderAddress: { type: String },
  receiverPhone: { type: String },
  receiverName: { type: String },
  receiverAddress: { type: String },
  orderType: { type: String },
  orderIsFragile: { type: Boolean }, // Không còn required
  orderNote: { type: String, default: null }, // Có thể để trống
  orderCOD: { type: Number, default: 0 }, // Mặc định là 0 nếu không có giá trị
  dservicesId: { type: String },
  totalPrice: { type: Number, default: 0 }, // Giá trị mặc định
  paymentId: { type: String, default: null },
  orderStatusId: { type: String },
  driverId: { type: String, default: null },
  createdDate: { type: Date },
  deliverPrice: { type: Number, default: 0 },
  proofSuccess: { type: String, default: null },
  reasonFailed: { type: String, default: null }
}, { collection: 'Order' });

const Order = model('Order', orderSchema);

export default Order;
