import Council from '../models/council.model.js';

// Create a new Council
export const createCouncil = async (req, res) => {
    try {
        const council = new Council(req.body);
        const savedCouncil = await council.save();
        res.status(201).json(savedCouncil);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Councils
export const getCouncils = async (req, res) => {
    try {
        const councils = await Council.find();
        res.status(200).json(councils);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single Council by ID
export const getCouncilById = async (req, res) => {
    try {
        const council = await Council.findById(req.params.id);
        if (!council) return res.status(404).json({ message: "Council not found" });
        res.status(200).json(council);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Update a Council by ID
export const updateCouncil = async (req, res) => {
    try {
        const updatedCouncil = await Council.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedCouncil) return res.status(404).json({ message: "Council not found" });
        res.status(200).json(updatedCouncil);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Delete a Council by ID
export const deleteCouncil = async (req, res) => {
    try {
        const deletedCouncil = await Council.findByIdAndDelete(req.params.id);
        if (!deletedCouncil) return res.status(404).json({ message: "Council not found" });
        res.status(200).json({ message: "Council deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

