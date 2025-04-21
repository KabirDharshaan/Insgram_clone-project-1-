const Wish = require('../models/wishModel');

// Get all wishes
const getWishes = async (req, res, next) => {
  try {
    const wishes = await Wish.find();
    res.json(wishes);
  } catch (error) {
    next(error);
  }
};

// Add a new wish
const addWish = async (req, res, next) => {
  const { wish } = req.body;
  if (!wish) {
    return res.status(400).json({ message: 'Wish is required' });
  }

  try {
    const newWish = new Wish({ wish });
    await newWish.save();
    res.status(201).json(newWish);
  } catch (error) {
    next(error);
  }
};

module.exports = { getWishes, addWish };
