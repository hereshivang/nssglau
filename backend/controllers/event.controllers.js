import Event from "../models/event.model.js";

// Create Event and Save to DB
export const createEvent = async (req, res) => {
    const { title, imageUrl, description, date, venue } = req.body;
    try {
        const event = new Event({
            title,
            description,
            imageUrl,
            date,
            venue
        });

        const createdEvent = await event.save();
        res.status(201).json(createdEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Event
export const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { title, imageUrl, description, date, venue } = req.body;
    try {
        const event = await Event.findById(id);
        if (event) {
            event.title = title;
            event.imageUrl = imageUrl;
            event.description = description;
            event.date = date;
            event.venue = venue;
            const updatedEvent = await event.save();
            res.status(201).json(updatedEvent);
        } else {
            res.status(404).json({ message: "Event not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Event
export const deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findById(id);
        if (event) {
            await Event.findByIdAndDelete(id);
            res.status(201).json({ message: "Event deleted successfully" });
        } else {
            res.status(404).json({ message: "Event not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
