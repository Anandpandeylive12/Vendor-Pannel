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

export const approveProduct = async (req, res) => {
  const { status } = req.body;
  const product = await Product.findByIdAndUpdate(
    req.params.productId,
    { status },
    { new: true }
  );
  res.json(product);
};
