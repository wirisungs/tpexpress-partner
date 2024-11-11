import { Schema, model } from 'mongoose';


const UserSchema = new Schema({
  userId: { //mã người dùng
    type: String,
    required: true,
  },
  userPhone: { //số điện thoại
    type: String,
    required: true
  },
  userPassword: { //mật khẩu
    type: String,
    required: true
  },
  userStatus: { //trạng thái đăng nhập
    type: String,
    required: true
  },
  userRole: { //vai trò
    type: String,
    ref: 'Role',
    required: true
  },
}, { collection: 'User' });

export default model('User', UserSchema);
