import Comment from "./Comment"
import Button from "../elements/Button"
const CommentSection = () => {
  return (
    <div className="">
      <Comment />
      <Comment />
      <Comment />
<Button label='Load more reviews' />
    </div>
  )
}

export default CommentSection