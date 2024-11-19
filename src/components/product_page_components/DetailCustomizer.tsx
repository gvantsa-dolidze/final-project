import Button from "../elements/Button";
import ColorPiker from "../elements/ColorPiker";
import SizePiker from "../elements/SizePiker";
import { Counter } from "../../store/app/Counter";
import LinkBtn from "../elements/LinkBtn";
import Title from "./Title";
import ProductPrice from "../elements/ProductPrice";
import { useState } from "react";

const DetailCustomizer = ({ product }: any) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [cartMessage, setCartMessage] = useState("");
  const AddToCart = () => {
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 2,
        date: currentDate,
        products: [{ productId: product.id, quantity: 1 }],
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => console.error("Error:", error));

    setCartMessage(`Product has been added to your cart.`);
  };

  return (
    <div className="w-[438px] flex flex-col gap-7">
      <div className="flex justify-between">
        <Title variant="title24" title={product.title} />
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
        <Counter id={product.id} />
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
      />
      {cartMessage && (
        <div className="flex items-center justify-start gap-4">
          <p>{cartMessage}</p>
          <LinkBtn destination="/cart_page" label="Go to cart" />
        </div>
      )}
    </div>
  );
};

export default DetailCustomizer;
