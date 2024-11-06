import React from 'react';

interface ProductPriceProps {
  price?: number;
  total?: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price, total }) => {
  return (
    <div className="text-start">${price || total}</div>
  );
};

export default ProductPrice;
