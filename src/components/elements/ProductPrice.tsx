import React from 'react';

interface ProductPriceProps {
  price?: number; // You can also use string if you prefer
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price = 43 }) => {
  return (
    <div className="text-start">${price.toFixed(2)}</div>
  );
};

export default ProductPrice;
