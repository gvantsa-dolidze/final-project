import WishlistCardElement from "./WishlistCardElement";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { getAllProducts } from "../../store/app/AllProductsReducer";
import PopOver from "../header_components/PopOver";

const WishList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  },[]);

  const products = useAppSelector((state) => state.allProduct.data || []);

  return (
    <div className="flex  flex-col xl:px-10 px-2 space-y-10">
      <div className="flex justify-between">
        <h3 className="text-start md:hidden block">Wishlist</h3>
        <PopOver categories="My Account"/>
      </div>
      
      {products.map((product: any) => (
        <WishlistCardElement
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default WishList;
