import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  phone: { type: String },
  oauthProvider: { type: String, default: "local" },
  role: { type: String, default: "vendor" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Vendor", vendorSchema);
