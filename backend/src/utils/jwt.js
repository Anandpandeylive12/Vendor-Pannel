import jwt from "jsonwebtoken";

export const generateToken = (vendor) => {
  return jwt.sign(
    { id: vendor._id, role: vendor.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};
