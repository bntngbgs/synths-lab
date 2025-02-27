import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const products = await axios.get(
          'https://sistemtoko.com/public/demo/product'
        );

        console.log(products.data.aaData);

        setProductData(products.data.aaData);
      } catch (error) {
        console.log(error);
      }
    };

    getProductData();
  }, []);

  return (
    <div className="container mt-28 mx-auto">
      <h1 className="section-title text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center tracking-wide">
        <span className="px-5 sm:px-8">OUR PRODUCTS</span>
      </h1>
      <div className="flex flex-wrap justify-between gap-6 mt-14">
        {Array.from(Array(8).keys()).map((_, index) => (
          <ProductCard key={index} {...productData[index]} />
        ))}
      </div>
    </div>
  );
};
export default Products;
