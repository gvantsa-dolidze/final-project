import FullRoundedImg from "../elements/FullRoundedImg";
import LinkBtn from "../elements/LinkBtn";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { getAllProducts } from "../../store/app/AllProductsReducer";

const EditCard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  },[]);

  const cart = useAppSelector((state) => state.cart.data || []);
  const limitedProducts = cart.slice(0, 3);


  return (
    <div className="flex  items-center justify-between gap-5 mt-5">
      <div className="flex gap-5">
        {limitedProducts.map((cart: any) => (
          <FullRoundedImg image={cart.image} />
        ))}
      </div>
      <LinkBtn label="Edit" variant="light" destination="/cart_page" />
    </div>
  );
};

export default EditCard;
