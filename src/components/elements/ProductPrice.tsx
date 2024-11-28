import React from 'react';

interface ProductPriceProps {
  price?: number;
  total?: number;
  hideOnSmall?: boolean;

}

const ProductPrice: React.FC<ProductPriceProps> = ({ price, total, hideOnSmall = false,
}) => {
  const responsiveClasses = hideOnSmall ? 'md:block md:text-sm hidden' : '';

  return (
    <div className={`text-sm text-start ${responsiveClasses}`}>${price || total}</div>
  );
};

export default ProductPrice;
