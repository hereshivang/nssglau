import express from 'express';
import { createEvent, updateEvent, deleteEvent } from '../controllers/event.controllers.js';

const router = express.Router();

router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;
