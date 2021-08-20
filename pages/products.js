import React from 'react';
import Product from '../components/Product';

const ProductList = ({ products }) => {
  return (
    <>
      {products &&
        products.map((product) => (
          <Product product={product} key={product.price} />
        ))}
    </>
  );
};

export default ProductList;
