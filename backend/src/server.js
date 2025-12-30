import "./config/passport.js";
import connectDB from "./config/db.js";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

console.log("GOOGLE_CLIENT_ID =", process.env.GOOGLE_CLIENT_ID);

await connectDB(); // 🔴 MUST happen before app.listen

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
