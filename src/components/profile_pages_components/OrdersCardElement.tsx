import Button from "../elements/Button";
import ImgElement from "../elements/ImgElement";
import ProductPrice from "../elements/ProductPrice";
import ProductTItle from "../product_page_components/Title";

interface OrdersCardElementProps {
  image: string;
  title: string;
  price: number;
}

const OrdersCardElement: React.FC<OrdersCardElementProps> = ({
  title,
  price,
  image,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-5">
        <ImgElement image={image} />
        <div className="text-start">
          <ProductTItle title={title} />
          <p>Added on: 27 July 2023</p>
          <Button variant="link" label="Remove item" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <ProductPrice price={price} />
        <Button variant="light" label="Add to cart" />
      </div>
    </div>
  );
};

export default OrdersCardElement;
