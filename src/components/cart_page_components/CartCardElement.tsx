import ImgElement from "../elements/ImgElement"
const CartCardElement = () => {
  return (
    <div className="flex items-center justify-between mt-5">
        <div className="flex gap-5">
          <ImgElement />
          <div className="text-start">
            <h3>Raw Black T-Shirt Lineup</h3>
            <div className="flex gap-2 items-center">
              color: <div className="bg-green-700 w-3 h-3 rounded-full"></div> -
              Size: M
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div>$75.00</div>
          <div> - 1 + </div>
          <button>
            <img
              src="/img/icons/x.png"
              alt="x"
              className="bg-BackgroundGray rounded-md"
            />
          </button>
        </div>
      </div>
  )
}

export default CartCardElement