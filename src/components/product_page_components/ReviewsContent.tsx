import Button from "../elements/Button";
import ProductRatingInfo from "../elements/ProductRatingInfo";
import SortByBtn from "../elements/SortByBtn";
const ReviewsContent = () => {
  return (
    <div className="w-[727px] flex justify-between items-end">
        <div className="space-y-5 text-start">
          <h2>Reviews</h2>
          <ProductRatingInfo />
          <Button label="Write a review" />
        </div>
          <SortByBtn />
      </div>
  );
};

export default ReviewsContent;
