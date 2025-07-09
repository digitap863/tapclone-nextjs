// import { connect } from "@/dbConfig/db.Config";
// import User from "@/models/userModel";
// import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// connect();

const adminCredentials = {
  adminid: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
  jwtsecret: process.env.JWT_SECRET,
};
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { password, email } = reqBody;

    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Email and password are required",
          success: false,
        },
        { status: 400 }
      );
    }

    if (email !== adminCredentials.adminid) {
      return NextResponse.json(
        {
          message: "Invalid Credentials",
          success: false,
        },
        { status: 401 }
      );
    }

    if (password !== adminCredentials.password) {
      return NextResponse.json(
        {
          message: "Invalid Password",
          success: false,
        },
        { status: 401 }
      );
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("JWT_SECRET is not set");
    }

    const token = jwt.sign(
      { id: adminCredentials.adminid, role: "admin" },
      jwtSecret,
      { expiresIn: "1h" }
    );

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600, // 1 hour in seconds
    });

    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
