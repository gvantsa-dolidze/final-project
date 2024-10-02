import Button from "../elements/Button";
import ProductRatingInfo from "../elements/ProductRatingInfo";
import SortByBtn from "../elements/SortByBtn";
const ReviewAndSort = () => {
  return (
    <div className="flex justify-between items-end border-b pb-10">
      <div className="space-y-5 text-start">
        <h2>Reviews</h2>
        <ProductRatingInfo />
        <Button label="Write a review" />
      </div>
      <SortByBtn />
    </div>
  );
};

export default ReviewAndSort;
