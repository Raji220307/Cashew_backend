import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    cart: [
      {
        product: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    shipping: {
      name: String,
      address: String,
      city: String,
      state: String,
      zip: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
