import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import SubNav from '../../components/subnavbar/SubNav';
import SingleProductPage from '../../Components/SingleProduct/SingleProduct';
import Footer from '../../components/footer/Footer';

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <SubNav />
      <SingleProductPage />
      <Footer />
    </>
  );
};

export default ProductPage;
