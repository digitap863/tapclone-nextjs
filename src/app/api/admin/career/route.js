import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/db.Config";
import Career from "@/models/career";

// GET all careers or single career by ID
export async function GET(request) {
  try {
    await connect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (id) {
      // Fetch single career by ID
      const career = await Career.findById(id);
      if (!career) {
        return NextResponse.json(
          { error: "Career not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(career);
    } else {
      // Fetch all careers
      const careers = await Career.find().sort({ createdAt: -1 });
      return NextResponse.json(careers);
    }
  } catch (error) {
    console.error('Error fetching careers:', error);
    return NextResponse.json(
      { error: "Failed to fetch careers" },
      { status: 500 }
    );
  }
}

// POST new career
export async function POST(request) {
  try {
    await connect();
    const data = await request.json();
    const { position, experience, skills, location, description } = data;

    // Validate required fields
    if (!position || !experience || !skills || !location || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Ensure skills is an array
    const skillsArray = Array.isArray(skills)
      ? skills
      : typeof skills === 'string'
        ? skills.split(',').map(s => s.trim()).filter(Boolean)
        : [];

    const career = await Career.create({
      position,
      experience,
      skills: skillsArray,
      location,
      description,
    });
    return NextResponse.json(career, { status: 201 });
  } catch (error) {
    console.error('Error creating career:', error);
    return NextResponse.json(
      { error: "Failed to create career" },
      { status: 500 }
    );
  }
}

// PUT update career
export async function PUT(request) {
  try {
    await connect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json(
        { error: "Career ID is required" },
        { status: 400 }
      );
    }

    const data = await request.json();
    const { position, experience, skills, location, description } = data;

    // Validate required fields
    if (!position || !experience || !skills || !location || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Ensure skills is an array
    const skillsArray = Array.isArray(skills)
      ? skills
      : typeof skills === 'string'
        ? skills.split(',').map(s => s.trim()).filter(Boolean)
        : [];

    const career = await Career.findByIdAndUpdate(id, {
      position,
      experience,
      skills: skillsArray,
      location,
      description,
    }, { new: true });

    if (!career) {
      return NextResponse.json(
        { error: "Career not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(career);
  } catch (error) {
    console.error('Error updating career:', error);
    return NextResponse.json(
      { error: "Failed to update career" },
      { status: 500 }
    );
  }
}

// DELETE career
export async function DELETE(request) {
  try {
    await connect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json(
        { error: "Career ID is required" },
        { status: 400 }
      );
    }

    const career = await Career.findByIdAndDelete(id);
    
    if (!career) {
      return NextResponse.json(
        { error: "Career not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Career deleted successfully" });
  } catch (error) {
    console.error('Error deleting career:', error);
    return NextResponse.json(
      { error: "Failed to delete career" },
      { status: 500 }
    );
  }
} 