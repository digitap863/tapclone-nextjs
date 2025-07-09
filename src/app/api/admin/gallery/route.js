import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/db.Config";
import Gallery from "@/models/gallery";
import { uploadFile } from "@/lib/fileUpload";

connect();

// GET all gallery images
export async function GET() {
  try {
    await connect();
    const images = await Gallery.find().sort({ createdAt: -1 });
    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return NextResponse.json(
      { error: "Failed to fetch gallery images" },
      { status: 500 }
    );
  }
}

// POST new gallery image
export async function POST(req) {
  try {
    await connect();
    
  const formData = await req.formData();
    const title = formData.get('title');
    const image = formData.get('image');

    if (!title || !image) {
      return NextResponse.json(
        { error: "Title and image are required" },
        { status: 400 }
      );
    }

    // Upload image
    let imageUrl = '';
    try {
      imageUrl = await uploadFile(image);
    } catch (error) {
      console.error('Error uploading image:', error);
      return NextResponse.json(
        { error: "Failed to upload image" },
        { status: 500 }
      );
    }

    const galleryData = {
      title,
      image: imageUrl,
    };

    const gallery = await Gallery.create(galleryData);
    return NextResponse.json(gallery, { status: 201 });
  } catch (error) {
    console.error('Error creating gallery image:', error);
    return NextResponse.json(
      { error: "Failed to create gallery image" },
      { status: 500 }
    );
  }
}

// DELETE gallery image
export async function DELETE(req) {
  try {
    await connect();
  const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json(
        { error: "Image ID is required" },
        { status: 400 }
      );
    }

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
