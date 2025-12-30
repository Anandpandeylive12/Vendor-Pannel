import Vendor from "../models/Vendor.js";
import { hashPassword, comparePassword } from "../utils/password.js";
import { generateToken } from "../utils/jwt.js";

export const signup = async (req, res) => {
  const { name, email, password, phone } = req.body;

  const exists = await Vendor.findOne({ email });
  if (exists) return res.status(400).json({ message: "Vendor exists" });

  const hashed = await hashPassword(password);

  const vendor = await Vendor.create({
    name,
    email,
    password: hashed,
    phone
  });

  res.json({ message: "Signup success" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const vendor = await Vendor.findOne({ email });
  if (!vendor) return res.status(400).json({ message: "Invalid credentials" });

  const match = await comparePassword(password, vendor.password);
  if (!match) return res.status(400).json({ message: "Invalid credentials" });

  const token = generateToken(vendor);
  res.json({ token, vendor });
};
