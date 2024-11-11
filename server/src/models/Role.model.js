import { Schema, model } from 'mongoose';

const RoleSchema = new Schema({
  roleId: { //mã vai trò
    type: String,
    required: true,
    default: "Driver",
    enum: ['Client', 'Driver', 'Salesman', 'Accountant', 'Warehouse', 'Support', 'Partner']
  },
  roleName: { //tên vai trò
    type: String,
    required: true,
    default: "Tài xế",
    enum: ['Khách hàng', 'Tài xế', 'Nhân viên bán hàng', 'Nhân viên kế toán', 'Nhân viên kho', 'Nhân viên CSKH', 'Đối tác']
  },
}, { collection: 'Role' });

export default model('Role', RoleSchema);
