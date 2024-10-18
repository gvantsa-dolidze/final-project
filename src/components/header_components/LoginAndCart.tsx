import LinkBtn from "../elements/LinkBtn";

const LoginAndCart = () => {
  return (
    <div className="md:flex hidden items-center">
      <LinkBtn destination='/cart_page' img="/img/icons/cart.png" variant='link' className="w-10 flex justify-center"/>
      <LinkBtn destination='/login_page' img="/img/icons/user.png" variant='link' className="w-10 flex justify-center"/>
    </div>
  );
};

export default LoginAndCart;
