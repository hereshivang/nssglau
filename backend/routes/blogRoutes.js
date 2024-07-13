import { createBlog, updateBlog, deleteBlog } from "../controllers/blog.controllers.js";
import express from "express";

const router = express.Router();

router.post('/',  createBlog);
router.put('/:id', updateBlog);
router.delete('/:id',  deleteBlog);

export default router;