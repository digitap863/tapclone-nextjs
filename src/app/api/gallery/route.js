import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/db.Config";
import Gallery from "@/models/gallery";

export async function GET() {
  try {
    await connect();
    const galleryItems = await Gallery.find().sort({ createdAt: -1 });
    return NextResponse.json(galleryItems);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return NextResponse.json(
      { error: "Failed to fetch gallery" },
      { status: 500 }
    );
  }
} 