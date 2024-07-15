import Gallery from "../models/gallery.model.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../config/configCloudinary.js";

// Function to delete expired photos
const deleteExpiredPhotos = async () => {
  const expiryDate = new Date();
  expiryDate.setMonth(expiryDate.getMonth() - 3);

  try {
    const expiredPhotos = await Gallery.find({ createdAt: { $lt: expiryDate } });

    for (const photo of expiredPhotos) {
      await deleteFromCloudinary(photo.cloudinaryId);
    }

    const result = await Gallery.deleteMany({ createdAt: { $lt: expiryDate } });
    console.log(`${result.deletedCount} expired photos deleted.`);
  } catch (error) {
    console.error("Error deleting expired photos:", error);
  }
};


setInterval(deleteExpiredPhotos, 24 * 60 * 60 * 1000);

// Create Photo and Save to DB
export const uploadPhoto = async (req, res) => {
  try {
    const { title, venue, date, headline, videoUrl, blogId } = req.body;
    const file = req.file;

    const existingPhotosCount = await Gallery.countDocuments({ blogId });
    if (existingPhotosCount >= 5) {
      return res.status(400).json({ message: "Maximum limit of 5 photos reached" });
    }

    if (!file) {
      return res.status(400).json({ message: "Please upload a file" });
    }

    // Upload file to Cloudinary
    const cloudinaryResult = await uploadOnCloudinary(file.buffer);

    if (!cloudinaryResult || !cloudinaryResult.secure_url) {
      throw new Error("Failed to get secure_url from Cloudinary");
    }

    const newPhoto = new Gallery({
      imageUrl: cloudinaryResult.secure_url,
      cloudinaryId: cloudinaryResult.public_id,
      title,
      venue,
      date,
      headline,
      videoUrl,
      blogId,
    });

    const savedPhoto = await newPhoto.save();
    res.status(201).json(savedPhoto);
  } catch (error) {
    console.error("Error uploading photo:", error);
    res.status(500).json({ message: "Failed to upload photo" });
  }
};

// Update Photo
export const updatePhoto = async (req, res) => {
  const { id } = req.params;
  try {
    const { title, venue, date, headline, videoUrl, blogId } = req.body;
    const file = req.file;

    const updatePhoto = await Gallery.findById(id);
    if (!updatePhoto) {
      return res.status(404).json({ message: "Photo not found" });
    }

    if (file) {
      const cloudinaryResult = await uploadOnCloudinary(file.buffer);

      if (!cloudinaryResult || !cloudinaryResult.secure_url) {
        throw new Error("Failed to get secure_url from Cloudinary");
      }

      await deleteFromCloudinary(updatePhoto.cloudinaryId);

      updatePhoto.imageUrl = cloudinaryResult.secure_url;
      updatePhoto.cloudinaryId = cloudinaryResult.public_id;
    }

    if (title) updatePhoto.title = title;
    if (venue) updatePhoto.venue = venue;
    if (date) updatePhoto.date = date;
    if (headline) updatePhoto.headline = headline;
    if (videoUrl) updatePhoto.videoUrl = videoUrl;
    if (blogId) updatePhoto.blogId = blogId;

    const updatedPhoto = await updatePhoto.save();
    res.status(200).json(updatedPhoto);
  } catch (error) {
    console.error("Error updating photo:", error);
    res.status(500).json({ message: "Failed to update photo" });
  }
};


// Delete Photo
export const deletePhoto = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPhoto = await Gallery.findByIdAndDelete(id);
    if (!deletedPhoto) {
      return res.status(404).json({ message: "Photo not found" });
    }

    await deleteFromCloudinary(deletedPhoto.cloudinaryId);

    res.status(200).json({ message: "Photo deleted successfully" });
  } catch (error) {
    console.error("Error deleting photo:", error);
    res.status(500).json({ message: "Failed to delete photo" });
  }
};

export default { uploadPhoto, updatePhoto, deletePhoto };
