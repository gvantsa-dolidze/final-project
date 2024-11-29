import FiveStar from "../elements/FiveStar"
import InitialsAvatar from "../elements/InitialsAvatar"
const Comment = () => {
  return (
    <div className="py-10 xl:flex justify-between">
      <InitialsAvatar />
      <div className="text-start space-y-3 max-w-[610px]">
        <h2 className="xl:block hidden">John Doe</h2>
        <p className="pt-5">11.11.2011</p>
        <p className="pb-5">Comment Text Comment Text Comment Text Comment Text Comment Text Comment Text Comment Text Comment Text </p>

      </div>
      <FiveStar />
    </div>
  )
}

export default Comment