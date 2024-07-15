import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  console.log("Cloudinary Configured");
};

export const uploadOnCloudinary = async (buffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve({
          secure_url: result.secure_url,
          public_id: result.public_id,
        });
      }
    }).end(buffer);
  });
};

export const deleteFromCloudinary = async (publicId) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(publicId, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
