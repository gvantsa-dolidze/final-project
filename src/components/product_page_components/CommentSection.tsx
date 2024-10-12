import Comment from "./Comment"
import Button from "../elements/Button"

const CommentSection = () => {
  return (
    <div className="">
      <Comment />
      <Comment />
      <Comment />
      <div className="flex justify-center">
       <Button label='Load more reviews' variant='light'/> 
      </div>

    </div>
  )
}

export default CommentSection