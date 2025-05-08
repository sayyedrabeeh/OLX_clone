import React, { useEffect, useState } from 'react';
import './SingleProduct.css';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  if (!product) return <div className="loading">Loading product details...</div>;

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
          <span>{product.datePosted || 'Date not available'}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{product.sellerName || 'No name'}</p>
          <p>{product.phone || '1234567890'}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
