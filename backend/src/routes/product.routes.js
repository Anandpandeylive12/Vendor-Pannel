import express from "express";
import {
  addProduct,
  vendorProducts,
  pendingProducts,
  updateProductStatus
} from "../controllers/product.controller.js";

import { protect, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, addProduct);
router.get("/vendor/:vendorId", protect, vendorProducts);

// ADMIN ONLY
router.get("/pending", protect, adminOnly, pendingProducts);
router.put("/approve/:id", protect, adminOnly, updateProductStatus);

export default router;
