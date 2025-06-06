import React, { useState } from "react";
import "./AddProductPage.css";
import { addProduct } from "../../firebase";  
import { uploadImage } from "../../cloudinary/ImageService";   
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import OlxLogo from "../../assets/OlxLogo";  
import { getAuth } from "firebase/auth";

const AddProductPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("You must be logged in to add a product.");
      return;
    }

    try {
      let imageUrl = "";
      if (image) {
        imageUrl = await uploadImage(image);
      }

      const newProduct = {
        productName,
        category,
        price: parseFloat(price),
        imageUrl,
        createdAt: new Date().toISOString(),
        sellerName,
        phone,
        sellerId: currentUser.uid,  // Save current user's ID here
      };

      await addProduct(newProduct);
      navigate("/home");
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="addProductContainer">
        <div className="addProductForm">
          <div className="logoContainer">
            <OlxLogo />
          </div>
          <form onSubmit={handleSubmit}>

            <div className="formGroup">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter product category"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="sellerName">Seller Name</label>
              <input
                type="text"
                id="sellerName"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                placeholder="Enter seller name"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="image">Product Image</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImage}
                required
              />
            </div>

            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" className="imagePreview" />
              </div>
            )}

            <button type="submit" className="submitBtn">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductPage;
