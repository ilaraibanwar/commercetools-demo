import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/products", productRoutes);

export default app;
