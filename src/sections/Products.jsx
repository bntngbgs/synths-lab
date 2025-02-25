// import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  // const [productData, setProductData] = useState([]);

  // useEffect(() => {
  //   const getProductData = async () => {
  //     try {
  //       const products = await fetch(
  //         'https://sistemtoko.com/public/demo/product'
  //       );
  //       console.log(products);

  //       setProductData(products);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getProductData();
  // }, []);

  return (
    <div className="container mt-28 mx-auto">
      <h1 className="section-title text-4xl font-heading font-bold text-center tracking-wide">
        <span>OUR PRODUCTS</span>
      </h1>
      <div className="flex flex-wrap justify-between gap-8 mt-14">
        {Array.from(Array(8).keys()).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};
export default Products;
