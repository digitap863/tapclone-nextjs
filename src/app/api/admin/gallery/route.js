import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/db.Config";
import Gallery from "@/models/gallery";
import { uploadFile } from "@/lib/fileUpload";

connect();

// GET all gallery items (images and videos)
export async function GET() {
  try {
    await connect();
    const items = await Gallery.find().sort({ createdAt: -1 });
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return NextResponse.json(
      { error: "Failed to fetch gallery items" },
      { status: 500 }
    );
  }
}

// POST new gallery item (image or video)
export async function POST(req) {
  try {
    await connect();
    
    const contentType = req.headers.get('content-type');
    
    // Handle video upload (JSON)
    if (contentType && contentType.includes('application/json')) {
      const { title, video,videoId } = await req.json();
      console.log('Received video data:', { title, video, videoId }); // Debug log

      if (!title || !video) {
        return NextResponse.json(
          { error: "Title and video are required" },
          { status: 400 }
        );
      }

      // Validate YouTube video ID format (11 characters)
      if (typeof video !== 'string') {
        return NextResponse.json(
          { error: "Invalid YouTube video ID" },
          { status: 400 }
        );
      }

      const galleryData = {
        title,
        video,
        videoId, // Assuming video is the YouTube ID
      };

      const gallery = await Gallery.create(galleryData);
      return NextResponse.json(gallery, { status: 201 });
    }
    
    // Handle image upload (FormData)
    else {
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
    }
  } catch (error) {
    console.error('Error creating gallery item:', error);
    return NextResponse.json(
      { error: "Failed to create gallery item" },
      { status: 500 }
    );
  }
}

// DELETE gallery item
export async function DELETE(req) {
  try {
    await connect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json(
        { error: "Item ID is required" },
        { status: 400 }
      );
    }

    const item = await Gallery.findByIdAndDelete(id);

    if (!item) {
      return NextResponse.json(
        { error: "Item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    return NextResponse.json(
      { error: "Failed to delete gallery item" },
      { status: 500 }
    );
  }
}