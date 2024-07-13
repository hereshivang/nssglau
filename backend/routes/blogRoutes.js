import { createBlog, updateBlog, deleteBlog } from "../controllers/blog.controllers.js";
import express from "express";
import  upload  from "../middleware/multer.middleware.js"; 

const router = express.Router();


router.post('/', upload.single('imageUrl'), createBlog);
router.put('/:id',upload.single('imageUrl'), updateBlog);
router.delete('/:id', deleteBlog);

export default router;