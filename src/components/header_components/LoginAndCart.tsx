import LinkBtn from "../elements/LinkBtn";

const LoginAndCart = () => {
  return (
    <div className="flex gap-5 items-center">
      <LinkBtn destination='/cart_page' img="/img/icons/cart.png" variant='link'/>
      <LinkBtn destination='/login_page' img="/img/icons/user.png" variant='link'/>
    </div>
  );
};

export default LoginAndCart;
