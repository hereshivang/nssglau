import express from 'express';
import {
    createCouncil,
    getCouncils,
    getCouncilById,
    updateCouncil,
    deleteCouncil
} from '../controllers/council.controllers.js';

const router = express.Router();

// Create a new Council
router.post('/', createCouncil);

// Get all Councils
router.get('/councils', getCouncils);

// Get a specific Council by ID
router.get('/:id', getCouncilById);

// Update a Council by ID
router.put('/:id', updateCouncil);

// Delete a Council by ID
router.delete('/:id', deleteCouncil);

export default router;
