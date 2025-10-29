import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"; 
import orderRoutes from "./routes/orderRoutes.js";
import productRoutes from './routes/productRoutes.js';
import authRoutes from "./routes/authRoutes.js"; 

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",                
      "https://cashew-website-btc3.vercel.app" 
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);  
app.use("/api/users", userRoutes); 
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
