import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import vendorRoutes from "./routes/vendorRoutes.js";
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "5mb" }));

app.use("/api/vendor", authRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/product", productRoutes);

export default app;
