import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/db.Config";
import Services from "@/models/services";
import Category from "@/models/Category";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connect();
    
    // Ensure Category model is registered
    if (!mongoose.models.Category) {
      mongoose.model("Category", Category.schema);
    }
    
    const services = await Services.find({})
      .populate('category', 'name')
      .sort({ createdAt: -1 });
    return NextResponse.json({ services });
  } catch (error) {
    console.error('Error in GET /api/services:', error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
} 