import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
  const product = await Product.create({
    ...req.body,
    vendorId: req.user.id
  });
  res.json(product);
};

export const vendorProducts = async (req, res) => {
  const products = await Product.find({ vendorId: req.params.vendorId });
  res.json(products);
};

export const pendingProducts = async (req, res) => {
  const products = await Product.find({ status: "pending" });
  res.json(products);
};

export const updateProductStatus = async (req, res) => {
  const { status } = req.body;

  if (!["approved", "rejected"].includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};
