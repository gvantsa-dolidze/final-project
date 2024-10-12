import ReviewAndSort from "./ReviewAndSort";
import CommentSection from "./CommentSection";
const ReviewsContent = () => {
  return (
    <div className="text-start space-y-10 w-[727px]">
      <ReviewAndSort />
      <CommentSection />
    </div>
  );
};

export default ReviewsContent;
