import express from "express";
import { uploadPhoto, updatePhoto, deletePhoto } from "../controllers/gallery.controllers.js";
import  upload  from "../middleware/multer.middleware.js"; 

const router = express.Router();

router.post('/', upload.single('imageUrl'), uploadPhoto);
router.put('/:id',upload.single('imageUrl'), updatePhoto);
router.delete('/:id', deletePhoto);

export default router;