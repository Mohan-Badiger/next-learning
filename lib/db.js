import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {

  try {
    cached.conn = await cached.promise;

    console.log("MongoDB connected successfully✅");

    return cached.conn;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
}
