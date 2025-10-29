import express from 'express';
import { createProduct, getProducts } from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// ✅ POST: Create a new product (Admin only)
router.post('/', protect, createProduct);

// ✅ GET: Fetch all products (Public)
router.get('/', getProducts);

export default router;
