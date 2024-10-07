import Breadcrumb from "../components/elements/Breadcrumb";

const CartPage = () => {
  return (
    <div>
      <div className="bg-BackgroundGray py-5">
        <Breadcrumb />
      </div>
      <div className="flex justify-between m-auto max-w-1116 py-10">
        {/* Cart element */}
        <div> 
          <h3 className="border-b pb-5">Your cart</h3>
          <div className="flex items-center justify-between gap-5 border rounded-md mt-5">
            <img src="/img/cover.png" alt="product" className="w-20" />
            <div className="text-start">
              <h3>Raw Black T-Shirt Lineup</h3>
              <div className="flex gap-2 items-center">color: <div className="bg-green-700 w-3 h-3 rounded-full"></div>  - Size: M</div>
            </div>
            <div>$75.00</div>
            <div> - 1 + </div>
            <button><img src="/img/icons/x.png" alt="x" /></button>
          </div>
        </div>
        <div>your order</div>
      </div>
    </div>
  );
};

export default CartPage;
