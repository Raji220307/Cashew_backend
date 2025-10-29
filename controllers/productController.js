import Product from '../models/product.js';

// 📦 GET all products (Public)
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err.message });
  }
};

// ➕ CREATE a new product (Admin only)
export const createProduct = async (req, res) => {
  try {
    // Optional: Check if user is admin (if you store role in req.user)
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }

    const { name, image, quantity, price } = req.body;

    if (!name || !image || !quantity || !price) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newProduct = new Product({ name, image, quantity, price });
    const savedProduct = await newProduct.save();

    res.status(201).json({
      message: 'Product added successfully',
      product: savedProduct,
    });
  } catch (err) {
    res.status(400).json({ message: 'Failed to add product', error: err.message });
  }
};
