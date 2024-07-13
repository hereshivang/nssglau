import express from 'express';
import { createEvent, updateEvent, deleteEvent } from '../controllers/event.controllers.js';
import  upload  from "../middleware/multer.middleware.js"; 

const router = express.Router();

router.post('/',upload.single('imageUrl'), createEvent);
router.put('/:id',upload.single('imageUrl'), updateEvent);
router.delete('/:id', deleteEvent);

export default router;
