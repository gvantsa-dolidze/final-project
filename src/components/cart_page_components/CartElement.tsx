import ImgElement from "../elements/ImgElement"

const CartElement = () => {
  return (
    <div>
          <h3 className="border-b pb-5 text-start">Your cart</h3>
          <div className="flex items-center justify-between gap-5 border rounded-md mt-5">
            <ImgElement />
            <div className="text-start">
              <h3>Raw Black T-Shirt Lineup</h3>
              <div className="flex gap-2 items-center">
                color: <div className="bg-green-700 w-3 h-3 rounded-full"></div>{" "}
                - Size: M
              </div>
            </div>
            <div>$75.00</div>
            <div> - 1 + </div>
            <button>
              <img src="/img/icons/x.png" alt="x" />
            </button>
          </div>
        </div>
  )
}

export default CartElement