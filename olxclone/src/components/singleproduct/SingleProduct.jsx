import React, { useEffect, useState } from 'react';
import './SingleProduct.css';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth } from 'firebase/auth';

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const auth = getAuth();
  const currentUser = auth.currentUser;

  const fetchProductDetails = async () => {
    try {
      const productDoc = doc(db, "products", id);
      const docSnap = await getDoc(productDoc);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.warn("No such product!");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteDoc(doc(db, "products", id));
        alert("Product deleted successfully.");
        navigate('/home');
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Failed to delete product.");
      }
    }
  };

  if (!product) return <div className="loading">Loading product details...</div>;

  const isOwner = currentUser && product.sellerId === currentUser.uid;

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={product.imageUrl} alt={product.productName} />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {product.price}</p>
          <span>{product.productName}</span>
          <p>{product.category}</p>
          <span>{product.createdAt || 'Date not available'}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{product.sellerName || 'No name'}</p>
          <p>{product.phone || '1234567890'}</p>
        </div>
        {isOwner && (
          <button onClick={handleDelete} className="deleteBtn">
            Delete Product
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProductPage;
