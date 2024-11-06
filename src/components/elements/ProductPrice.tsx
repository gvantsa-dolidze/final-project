import React from 'react';

interface ProductPriceProps {
  price?: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
  return (
    <div className="text-start">${price}</div>
  );
};

export default ProductPrice;
