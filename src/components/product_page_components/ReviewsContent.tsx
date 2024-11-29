import ReviewAndSort from "./ReviewAndSort";
import CommentSection from "./CommentSection";
const ReviewsContent = () => {
  return (
    <div className="text-start space-y-10 md:w-3/4">
      <ReviewAndSort />
      <CommentSection />
    </div>
  );
};

export default ReviewsContent;
