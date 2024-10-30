import React from 'react';

interface ProductPriceProps {
  price?: number; // You can also use string if you prefer
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
  return (
    <div className="text-start">${price}</div>
  );
};

export default ProductPrice;
