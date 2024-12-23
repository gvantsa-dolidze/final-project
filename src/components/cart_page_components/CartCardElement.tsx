import { Counter } from "../../store/app/Counter";
import Button from "../elements/Button";
import ImgElement from "../elements/ImgElement";
import ProductPrice from "../elements/ProductPrice";
import ProductTItle from "../product_page_components/Title";
import { addItemToCart, CartItem, removeItemFromCart } from '../../store/app/CartReducer';
import { useDispatch } from "react-redux";

interface CartCardElementProps {
  id?: any; 
  image?: string;
  title?: string;
  price?: number;
  quantity: number;
  
}
const CartCardElement: React.FC<CartCardElementProps> = ({ id, title, price, image, quantity }) => {
  
  const dispatch = useDispatch();

  // Handler to remove item from the cart
  const handleRemoveItem = (itemId: any) => {
    const item: CartItem = {id: itemId, quantity: 999};
    // Dispatch the action to remove item from cart
    dispatch(removeItemFromCart(item));
  }
  return (
    <div className="flex items-center justify-between mt-5 gap-5">
      <div className="flex gap-5">
        <ImgElement image={image}/>
        <div className="text-start">
          <ProductTItle title={title} truncateLength={20} hideOnSmall={true}/>
          <p className="md:block md:text-sm hidden"><span>quantity - </span>{quantity}</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <ProductPrice price={price}/>
        <Counter
          value={quantity}
          add={() => dispatch(addItemToCart({id: id, quantity: 1} as CartItem))}
          remove={() => dispatch(removeItemFromCart({id: id, quantity: 1} as CartItem))}
          />
        <Button variant="gray" img="/img/icons/x.png"  onClick={() => handleRemoveItem(id)}/>
      </div>
    </div>
  );
};

export default CartCardElement;
