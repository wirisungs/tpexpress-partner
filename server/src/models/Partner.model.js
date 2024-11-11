import { Schema, model } from 'mongoose';

const PartnerSchema = new Schema({
  partnerId: { //mã đối tác
    type: String,
    required: true,
  },
  partnerName: { //tên đối tác
    type: String,
    required: true
  },
  partnerPhone: { //số điện thoại
    type: String,
    required: true,
    ref: 'User'
  },
  partnerEmail: { //email
    type: String,
    required: true
  },
}, { collection: 'Partner' });

export default model('Partner', PartnerSchema);
