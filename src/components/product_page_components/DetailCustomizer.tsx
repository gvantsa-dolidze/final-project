import Button from "../elements/Button";
import ColorPiker from "../elements/ColorPiker";
import SizePiker from "../elements/SizePiker";
import { Counter } from "../../store/app/Counter";
import LinkBtn from "../elements/LinkBtn";
import Title from "./Title";
import ProductPrice from "../elements/ProductPrice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addItemToCart } from "../../store/app/CartReducer";

const DetailCustomizer = ({ product }: any) => {
  const [cartMessage, setCartMessage] = useState("");
  const dispatch = useAppDispatch();

  const [count, setCount] = useState(0);

  const AddToCart = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const pp = data.find((p: any) => p.id === product.id);
        return pp;
      })
      .then((pp) =>
        dispatch(addItemToCart({ ...pp, productId: product.id, quantity: count }))
      );

    setCartMessage(`Product has been added to your cart.`);
  };

  return (
    <div className="flex flex-col gap-7">
      <div className="flex justify-between">
        <Title variant="title16" title={product.title} truncateLength={30}/>
        <Button img="/img/icons/share.png" variant="link" />
      </div>

      <div className="flex gap-5">
        <LinkBtn
          destination="details_content"
          variant="secondary"
          img="/img/icons/star.png"
          label={
            product.rating
              ? `${product.rating.rate} - ${product.rating.count} Reviews`
              : "No reviews"
          }
          className="flex items-center text-xs"
        />
        <Button label="IN STOCK" variant="secondary" />
      </div>
      <ProductPrice price={product.price} />
      <div className="flex flex-col items-start">
        <Title variant="title12" title="Available Colors" className="pb-2" />
        <ColorPiker />
      </div>
      <div>
        <Title
          variant="title12"
          title="SELECT SIZE"
          className="text-start pb-2"
        />

        <SizePiker />
      </div>
      <div className="space-y-2">
        <Title variant="title12" title="Quantity" className="text-start" />
        <Counter value={count} add={() => setCount(Math.max(count + 1, 0))} remove={() => setCount(Math.max(count - 1, 0))} />
      </div>
      <div className="flex gap-5 items-center">
        <Button label="Add to cart" onClick={AddToCart} />
        <Button
          img="/img/icons/heart.png"
          variant="borderPngBtn"
          className=""
        />
      </div>
      <Title
        variant="title12"
        title="— Free shipping on orders $100+"
        className="text-start"
        truncate={false}
      />
      {cartMessage && (
        <div className="flex-col  items-center justify-start gap-4">
          <p className="pb-5">{cartMessage}</p>
          <LinkBtn destination="/cart_page" label="Go to cart" />
        </div>
      )}
    </div>
  );
};

export default DetailCustomizer;
