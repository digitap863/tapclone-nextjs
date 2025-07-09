import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/db.Config";
import Gallery from "@/models/gallery";

connect();

// GET single gallery image
export async function GET(
  req,
  { params }
) {
  try {
    await connect();
    const { id } = params;

    const gallery = await Gallery.findById(id);
    if (!gallery) {
      return NextResponse.json(
        { error: "Image not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(gallery);
        } catch (error) {
    console.error('Error fetching gallery image:', error);
    return NextResponse.json(
      { error: "Failed to fetch gallery image" },
      { status: 500 }
    );
  }
}

// DELETE gallery image
export async function DELETE(
  req,
  { params }
) {
  try {
    await connect();
    const { id } = params;
    
    const image = await Gallery.findByIdAndDelete(id);
    if (!image) {
      return NextResponse.json(
        { error: "Image not found" },
        { status: 404 }
      );
      }

    return NextResponse.json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    return NextResponse.json(
      { error: "Failed to delete gallery image" },
      { status: 500 }
    );
  }
}
