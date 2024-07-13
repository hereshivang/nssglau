import Blog from "../models/blog.model.js";
import { uploadOnCloudinary } from "../config/configCloudinary.js";

// Create Blog and Save to DB
export const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const file = req.file;

    if (!title || !content || !author) {
      return res.status(400).json({ message: "All fields (title, content, author) are required." });
    }

    if (!file) {
      return res.status(400).json({ message: "Please upload a file" });
    }

    console.log("Uploading file to Cloudinary...");
    const cloudinaryResult = await uploadOnCloudinary(file.buffer);

    if (!cloudinaryResult || !cloudinaryResult.secure_url) {
      throw new Error("Failed to get secure_url from Cloudinary");
    }

    const newBlog = new Blog({
      imageUrl: cloudinaryResult.secure_url,
      title,
      content,
      author,
    });

    const createdBlog = await newBlog.save();
    res.status(201).json(createdBlog);
    
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: error.message });
  }
};

// Update Blog
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  const file = req.file;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (file) {
      console.log("Uploading file to Cloudinary...");
      const cloudinaryResult = await uploadOnCloudinary(file.buffer);

      if (!cloudinaryResult || !cloudinaryResult.secure_url) {
        throw new Error("Failed to get secure_url from Cloudinary");
      }

      blog.imageUrl = cloudinaryResult.secure_url;
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.author = author || blog.author;

    const updatedBlog = await blog.save();
    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Failed to update blog" });
  }
};

// Delete Blog
export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    await Blog.findByIdAndDelete(id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Failed to delete blog" });
  }
};

export default { createBlog, updateBlog, deleteBlog };
