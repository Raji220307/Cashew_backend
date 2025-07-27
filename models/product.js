import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
