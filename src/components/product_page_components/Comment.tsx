import FiveStar from "../elements/FiveStar"
import InitialsAvatar from "../elements/InitialsAvatar"
const Comment = () => {
  return (
    <div className="py-10 flex justify-between">
        <InitialsAvatar />
        <div className="text-start space-y-3 max-w-[610px]">
            <h2>John Doe</h2>
            <p>11.11.2011</p>
            <p>Comment Text Comment Text Comment Text Comment Text Comment Text Comment Text Comment Text Comment Text </p> 
        </div>
        <FiveStar />
    </div>
  )
}

export default Comment