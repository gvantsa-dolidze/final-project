import WishlistCardElement from "./WishlistCardElement"
const WishList = () => {
  return (
    <div className="flex  flex-col pl-10 space-y-10">
      <h3 className="text-start">Wishlist</h3>
      <WishlistCardElement />
    </div>
  )
}

export default WishList