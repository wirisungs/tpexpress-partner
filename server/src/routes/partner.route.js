import express from 'express';
import { getAllPartners, getPartnerById, updatePartner, deletePartner } from '../controllers/partner.controller.js';
import { authenticateUser } from '../middlewares/auth.middleware.js';
const partnerRoutes = express.Router();

partnerRoutes.get('/', getAllPartners);
partnerRoutes.get('/:partnerId', authenticateUser, getPartnerById);
partnerRoutes.put('/:partnerId', authenticateUser, updatePartner);
partnerRoutes.delete('/:partnerId', deletePartner);

export default partnerRoutes
