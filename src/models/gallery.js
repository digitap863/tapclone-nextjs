import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  image: {
    type: String,
    // required: [true, "Image is required"],
  },
  video: {
    type: String,
    // required: [true, "Video ID is required"],
  },
  videoId:{
    type: String,
    // required: [true, "Video ID is required"],
  }
}, {
  timestamps: true,
});

const Gallery = mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);

export default Gallery; 