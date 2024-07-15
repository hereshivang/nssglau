import Event from "../models/event.model.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../config/configCloudinary.js";

// Deleting Uploaded Events After Every 3 Month
const deleteExpiredEvents = async () => {
  const expiryDate = new Date();
  expiryDate.setMonth(expiryDate.getMonth() - 3);

  try {
    const expiredEvents = await Event.find({ createdAt: { $lt: expiryDate } });

    for (const event of expiredEvents) {
      await deleteFromCloudinary(event.cloudinaryId);
    }

    const result = await Event.deleteMany({ createdAt: { $lt: expiryDate } });
    console.log(`${result.deletedCount} expired Events deleted.`);
  } catch (error) {
    console.error("Error deleting expired Events:", error);
  }
};

setInterval(deleteExpiredEvents, 24 * 60 * 60 * 1000); // Run once a day

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
      cloudinaryId: cloudinaryResult.public_id,
      date,
      venue,
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
        
      await deleteFromCloudinary(event.cloudinaryId);

      console.log("Uploading file to Cloudinary...");
      const cloudinaryResult = await uploadOnCloudinary(file.buffer);

      if (!cloudinaryResult || !cloudinaryResult.secure_url) {
        throw new Error("Failed to get secure_url from Cloudinary");
      }

      event.imageUrl = cloudinaryResult.secure_url;
      event.cloudinaryId = cloudinaryResult.public_id;
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

    await deleteFromCloudinary(event.cloudinaryId);

    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Failed to delete event" });
  }
};

export default { createEvent, updateEvent, deleteEvent };
