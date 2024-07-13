import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  console.log("Cloudinary Configured");
};

const uploadOnCloudinary = async (buffer) => {
  try {
    if (!buffer) throw new Error("No file buffer provided");

    console.log("Starting Cloudinary upload...");
    const response = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ resource_type: "auto" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }).end(buffer);
    });

    console.log("Cloudinary upload successful:", response);
    return response;
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    throw error;
  }
};

export { configCloudinary, uploadOnCloudinary };
