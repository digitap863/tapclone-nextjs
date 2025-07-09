import { NextResponse } from 'next/server';
import { connect } from "@/dbConfig/db.Config";
import Services from '@/models/services';
import Category from '@/models/Category';
import { uploadFile } from '@/lib/fileUpload';

// Helper function to get default category
async function getDefaultCategory() {
  const defaultCategory = await Category.findOne({ name: 'Uncategorized' });
  if (defaultCategory) {
    return defaultCategory._id;
  }
  
  // Create default category if it doesn't exist
  const newCategory = await Category.create({ name: 'Uncategorized' });
  return newCategory._id;
}

export async function GET() {
  try {
    await connect();
    
    // Get all services
    let services = await Services.find({})
      .populate('category', 'name')
      .sort({ createdAt: -1 });

    // Check for services without category and update them
    const defaultCategoryId = await getDefaultCategory();
    const servicesToUpdate = services.filter(service => !service.category);
    
    if (servicesToUpdate.length > 0) {
      await Promise.all(
        servicesToUpdate.map(service =>
          Services.findByIdAndUpdate(service._id, { category: defaultCategoryId })
        )
      );
      
      // Fetch updated services
      services = await Services.find({})
        .populate('category', 'name')
        .sort({ createdAt: -1 });
    }
    
    if (!services) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(services);
  } catch (error) {
    console.error('Error in GET /api/admin/services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connect();
    const formData = await request.formData();
    const title = formData.get('title');
    const image = formData.get('image');
    const categoryId = formData.get('categoryId');

    if (!title || !image) {
      return NextResponse.json(
        { error: 'Title and image are required' },
        { status: 400 }
      );
    }

    // If no category is provided, use default category
    let finalCategoryId = categoryId;
    if (!finalCategoryId) {
      finalCategoryId = await getDefaultCategory();
    } else {
      // Verify category exists
      const category = await Category.findById(finalCategoryId);
      if (!category) {
        return NextResponse.json(
          { error: 'Invalid category' },
          { status: 400 }
        );
      }
    }

    // Upload image to Cloudinary
    const imageUrl = await uploadFile(image);

    const service = await Services.create({
      title,
      image: imageUrl,
      category: finalCategoryId,
    });

    return NextResponse.json(service);
  } catch (error) {
    console.error('Error in POST /api/admin/services:', error);
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Service ID is required' },
        { status: 400 }
      );
    }

    await connect();
    const deletedService = await Services.findByIdAndDelete(id);

    if (!deletedService) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/admin/services:', error);
    return NextResponse.json(
      { error: 'Failed to delete service' },
      { status: 500 }
    );
  }
} 