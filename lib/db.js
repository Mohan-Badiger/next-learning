import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    console.log("✅ MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);

    console.log("✅ MongoDB connected successfully 🚀");
    console.log("📦 DB Name:", mongoose.connection.name);

  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}
