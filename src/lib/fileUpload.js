import { v2 as cloudinary } from 'cloudinary';



// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadFile = async (file) => {
  try {
    // Validate file
    if (!file) {
      throw new Error('No file provided');
    }

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      throw new Error('File size exceeds 10MB limit');
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
      throw new Error('File must be an image');
    }

    // Convert File to base64
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64String = buffer.toString('base64');
    const dataURI = `data:${file.type};base64,${base64String}`;

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload(dataURI, {
        folder: 'pradaresidency',
        resource_type: 'auto',
      }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      });
    });

    // Return the secure URL
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error instanceof Error ? error : new Error('Failed to upload file');
  }
}; 