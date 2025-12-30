import express from "express";
import auth from "../middleware/auth.middleware.js";
import adminOnly from "../middleware/role.middleware.js";
import {
  addProduct,
  vendorProducts,
  pendingProducts,
  approveProduct
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/add", auth, addProduct);
router.get("/vendor/:vendorId", auth, vendorProducts);
router.get("/pending", auth, adminOnly, pendingProducts);
router.put("/approve/:productId", auth, adminOnly, approveProduct);

export default router;
