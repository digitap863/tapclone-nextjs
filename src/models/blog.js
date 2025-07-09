import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, "Slug is required"],
    unique: true,
    trim: true,
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  featuredImage: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
  },
}, {
  timestamps: true,
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);