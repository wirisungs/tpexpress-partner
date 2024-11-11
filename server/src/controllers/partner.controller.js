import Partner from '../models/Partner.model.js';

export const getAllPartners = async (req, res) => {
    try {
        const partners = await Partner.find();
        res.status(200).json(partners);
    } catch (error) {
        console.error('Error getting partners:', error);
        res.status(500).json({ message: 'Error getting partners', error: error.message });
    }
}

export const getPartnerById = async (req, res) => {
    const { partnerId } = req.params;
    try {
        const partner = await Partner.findOne({ partnerId });
        if (!partner) {
            return res.status(404).json({ message: 'Partner not found' });
        }
        res.status(200).json(partner);
    }
    catch (error) {
        console.error('Error getting partner:', error);
        res.status(500).json({ message: 'Error getting partner', error: error.message });
    }
}

export const updatePartner = async (req, res) => {
    const { partnerId } = req.params;
    const partner = req.body;
    try {
        const updatedPartner = await Partner.findOneAndUpdate({ partnerId }, partner, { new: true });
        if (!updatedPartner) {
            return res.status(404).json({ message: 'Partner not found' });
        }
        res.status(200).json(updatedPartner);
    }
    catch (error) {
        console.error('Error updating partner:', error);
        res.status(500).json({ message: 'Error updating partner', error: error.message });
    }
}

export const deletePartner = async (req, res) => {
    const { partnerId } = req.params;
    try {
        const deletedPartner = await Partner.findOneAndDelete({ partnerId });
        if (!deletedPartner) {
            return res.status(404).json({ message: 'Partner not found' });
        }
        res.status(200).json(deletedPartner);
    }
    catch (error) {
        console.error('Error deleting partner:', error);
        res.status(500).json({ message: 'Error deleting partner', error: error.message });
    }
}


