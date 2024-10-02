import FiveStar from "../elements/FiveStar"
import InitialsAvatar from "../elements/InitialsAvatar"
const Comment = () => {
  return (
    <div className="py-10 flex items-start">
        <InitialsAvatar />
        <div className="text-start space-y-3">
            <h2>name</h2>
            <p>date of comment</p>
            <p>Comment text Comment text Comment text Comment text Comment text Comment text Comment text Comment text </p>
        </div>
        <FiveStar />
    </div>
  )
}

export default Comment