import Gallery from "../models/gallery.model.js";
import { uploadOnCloudinary } from "../config/configCloudinary.js";

export const uploadPhoto = async (req, res) => {
  try {
    const { title, venue, date, headline, videoUrl, blogId } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "Please upload a file" });
    }

    //console.log("Uploading file to Cloudinary...");
    const cloudinaryResult = await uploadOnCloudinary(file.buffer);

    if (!cloudinaryResult || !cloudinaryResult.secure_url) {
      throw new Error("Failed to get secure_url from Cloudinary");
    }

    const newPhoto = new Gallery({
      imageUrl: cloudinaryResult.secure_url,
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

export const updatePhoto = async (req, res) => {
    const { id } = req.params;
    try {
      // console.log("Request Body:", req.body);
     //  console.log("Request File:", req.file);
  
      const { title, venue, date, headline, videoUrl, blogId } = req.body;
      const file = req.file;
  
      const updatePhoto = await Gallery.findById(id);
      if (!updatePhoto) {
        return res.status(404).json({ message: "Photo not found" });
      }
  
      if (file) {
        // console.log("Uploading file to Cloudinary...");
        const cloudinaryResult = await uploadOnCloudinary(file.buffer);
  
        if (!cloudinaryResult || !cloudinaryResult.secure_url) {
          throw new Error("Failed to get secure_url from Cloudinary");
        }
  
        updatePhoto.imageUrl = cloudinaryResult.secure_url;
      }
  
      // Log the fields to be updated
      // console.log("Fields to be updated:", { title, venue, date, headline, videoUrl, blogId });
  
      // Ensure fields are not undefined before assigning
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

export const deletePhoto = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPhoto = await Gallery.findByIdAndDelete(id);
    if (!deletedPhoto) {
      return res.status(404).json({ message: "Photo not found" });
    }
    res.status(200).json({ message: "Photo deleted successfully" });
  } catch (error) {
    console.error("Error deleting photo:", error);
    res.status(500).json({ message: "Failed to delete photo" });
  }
};
