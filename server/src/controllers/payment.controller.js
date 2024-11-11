export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    console.log(error, 'Error getting payments');
    res.status(500).json({ message: 'Error getting payments', error: error.message });
  }
}
