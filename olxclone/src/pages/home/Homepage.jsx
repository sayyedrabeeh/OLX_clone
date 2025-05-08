import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SubNav from "../../components/subnavbar/SubNav";
import RecommendedProducts from "../../components/recommendproduct/RecommendedProducts";
import Footer from "../../components/footer/Footer";
 
const Homepage = () => {
  return (
    <div className="home">
      <Navbar />
      <SubNav />
      <RecommendedProducts />
      <Footer />
    </div>
  );
};

export default Homepage;
