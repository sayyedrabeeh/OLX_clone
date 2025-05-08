import React, { useEffect, useState } from "react";
import "./RecommendedProducts.css";
import Heart from "../../assets/Heart";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const RecommendedProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(productList);
    console.log('Fetched products:', productList);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="postParentDiv">
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products.length === 0 ? (
            <p>No products available</p>
          ) : (
            <>
              {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <div className="card">
                    <div className="favorite">
                      <Heart />
                    </div>
                    <div className="image">
                      <img src={product.imageUrl} alt={product.name} />
                    </div>
                    <div className="content">
                      <p className="rate">&#x20B9; {product.price}</p>
                      <span className="kilometer">{product.category}</span>
                      <p className="name"> {product.productName}</p>
                    </div>
                    <div className="date">
                      <span>10/5/2021</span>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
