import axios from "axios";

export const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "olx_image");   
    formData.append("cloud_name", "dajeitt4m");     

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dajeitt4m/image/upload",
      formData
    );

    return response.data.secure_url;
  } catch (error) {
    console.error("Image upload failed:", error.message);
    throw error;
  }
};
