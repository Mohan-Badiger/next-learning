import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const { email, password } = body;

    const user = await User.findOne({ email });

    if (!user || password !== user.password) {
      return NextResponse.json({
        success: false,
        error: "Invalid credentials",
      });
    }

    // ✅ Use NextResponse instead of Response
    const response = NextResponse.json({
      success: true,
      message: "Login successful 🎉",
    });

    // ✅ Now cookies works
    response.cookies.set("isLoggedIn", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;

  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
