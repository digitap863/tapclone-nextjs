import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/db.Config";
import { Blog } from "@/models/blog";
import { uploadFile } from "@/lib/fileUpload";
import { v4 as uuidv4 } from 'uuid';

// Helper function to generate unique slug from title
async function generateUniqueSlug(title) {
  // Generate base slug
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // Check if slug exists
  let slug = baseSlug;
  let exists = true;

  while (exists) {
    const existingBlog = await Blog.findOne({ slug });
    if (!existingBlog) {
      exists = false;
    } else {
      // If slug exists, append a random string
      slug = `${baseSlug}-${uuidv4().slice(0, 8)}`;
    }
  }

  return slug;
}

// GET all blogs or single blog by ID
export async function GET(request) {
  try {
    await connect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (id) {
      // Fetch single blog by ID
      const blog = await Blog.findById(id);
      if (!blog) {
        return NextResponse.json(
          { error: "Blog not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(blog);
    } else {
      // Fetch all blogs
      const blogs = await Blog.find().sort({ createdAt: -1 });
      console.log(blogs,"this is blogs");
      return NextResponse.json(blogs);
    }
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// POST new blog
export async function POST(request) {
  try {
    await connect();
    
    // Handle FormData
    const formData = await request.formData();
    const title = formData.get('title');
    const content = formData.get('content');
    const status = formData.get('status');
    const featuredImage = formData.get('featuredImage');

    // Validate required fields
    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    // Generate unique slug from title
    const slug = await generateUniqueSlug(title);

    // Upload image if provided
    let featuredImageUrl = '';
    if (featuredImage) {
      try {
        featuredImageUrl = await uploadFile(featuredImage);
      } catch (error) {
        console.error('Error uploading image:', error);
        return NextResponse.json(
          { error: "Failed to upload image" },
          { status: 500 }
        );
      }
    }

    // Create blog data object
    const blogData = {
      title,
      slug,
      content,
      status: status || 'draft',
      featuredImage: featuredImageUrl,
    };
    
    const blog = await Blog.create(blogData);
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}

// PUT update blog
export async function PUT(request) {
  try {
    await connect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json(
        { error: "Blog ID is required" },
        { status: 400 }
      );
    }

    // Handle FormData
    const formData = await request.formData();
    const title = formData.get('title');
    const content = formData.get('content');
    const status = formData.get('status');
    const featuredImage = formData.get('featuredImage');

    // Validate required fields
    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    // Upload new image if provided
    let featuredImageUrl = '';
    if (featuredImage) {
      try {
        featuredImageUrl = await uploadFile(featuredImage);
      } catch (error) {
        console.error('Error uploading image:', error);
        return NextResponse.json(
          { error: "Failed to upload image" },
          { status: 500 }
        );
      }
    }

    // Update blog data
    const updateData = {
      title,
      content,
      status: status || 'draft',
    };

    if (featuredImageUrl) {
      updateData.featuredImage = featuredImageUrl;
    }

    const blog = await Blog.findByIdAndUpdate(id, updateData, { new: true });

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

// DELETE blog
export async function DELETE(request) {
  try {
    await connect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json(
        { error: "Blog ID is required" },
        { status: 400 }
      );
    }

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
