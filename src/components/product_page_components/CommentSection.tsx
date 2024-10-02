import Comment from "./Comment"
import Button from "../elements/Button"
const CommentSection = () => {
  return (
    <div className="w-[727px]">
      <Comment />
      <Comment />
      <Comment />
<Button label='Load more reviews'/>
    </div>
  )
}

export default CommentSection