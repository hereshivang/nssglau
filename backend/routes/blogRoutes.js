import { createBlog, updateBlog, deleteBlog } from "../controllers/blog.controllers.js";
import express from "express";
import upload from '../middlewares/uploadImage.js';

const router = express.Router();

router.post('/',upload.single('image') ,createBlog);
router.put('/:id',upload.single('image'),updateBlog);
router.delete('/:id',upload.single('image'),deleteBlog);

export default router;