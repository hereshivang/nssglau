import Event from "../models/event.model.js";
import { uploadOnCloudinary } from "../config/configCloudinary.js";

// Create Event and Save to DB
export const createEvent = async (req, res) => {
    try {
        const { title, description, date, venue } = req.body;
        const file = req.file;

        if (!title || !description || !date || !venue) {
            return res.status(400).json({ message: "All fields (title, description, date, venue) are required." });
        }

        if (!file) {
            return res.status(400).json({ message: "Please upload an image" });
        }

        console.log("Uploading file to Cloudinary...");
        const cloudinaryResult = await uploadOnCloudinary(file.buffer);

        if (!cloudinaryResult || !cloudinaryResult.secure_url) {
            throw new Error("Failed to get secure_url from Cloudinary");
        }

        const event = new Event({
            title,
            description,
            imageUrl: cloudinaryResult.secure_url,
            date,
            venue
        });

        const createdEvent = await event.save();
        res.status(201).json(createdEvent);
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({ message: error.message });
    }
};

// Update Event
export const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { title, description, date, venue } = req.body;
    const file = req.file;

    try {
        const event = await Event.findById(id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        if (file) {
            console.log("Uploading file to Cloudinary...");
            const cloudinaryResult = await uploadOnCloudinary(file.buffer);

            if (!cloudinaryResult || !cloudinaryResult.secure_url) {
                throw new Error("Failed to get secure_url from Cloudinary");
            }

            event.imageUrl = cloudinaryResult.secure_url;
        }

        event.title = title || event.title;
        event.description = description || event.description;
        event.date = date || event.date;
        event.venue = venue || event.venue;

        const updatedEvent = await event.save();
        res.status(200).json(updatedEvent);
    } catch (error) {
        console.error("Error updating event:", error);
        res.status(500).json({ message: "Failed to update event" });
    }
};

// Delete Event
export const deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findById(id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        await Event.findByIdAndDelete(id);
        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        console.error("Error deleting event:", error);
        res.status(500).json({ message: "Failed to delete event" });
    }
};
