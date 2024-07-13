import Blog from "../models/blog.model.js";

// Create Blog and Save to DB
export const createBlog = async (req, res) => {
  const { title,imageUrl,content, author } = req.body;
  try {
    const blog = new Blog({
      title,
      imageUrl,
      content,
      author,
    });

    const createdBlog = await blog.save();
    res.status(201).json(createdBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Upadte Blog
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, imageUrl, content, author } = req.body;
  try {
    const blog = await Blog.findById(id);
    if (blog) {
      blog.title = title;
      blog.imageUrl = imageUrl;
      blog.content = content;
      blog.author = author;
      const updatedBlog = await blog.save();
      res.status(201).json(updatedBlog);
    }
  } catch (error) {
    res.status(404).json({ message: "Blog not found" });
  }
};

// Delete Blog
export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (blog) {
      await Blog.findByIdAndDelete(id);
      res.status(201).json({ message: "Blog deleted successfully" });
    } else {
      res.status(404).json({ message: "Blog Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { createBlog, updateBlog, deleteBlog };
