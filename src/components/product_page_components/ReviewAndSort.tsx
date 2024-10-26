import LinkBtn from "../elements/LinkBtn";
import ProductRatingInfo from "../elements/ProductRatingInfo";
import SortByBtn from "../elements/SortByBtn";
const ReviewAndSort = () => {
  return (
    <div className="flex justify-between items-end border-b pb-10">
      <div className="space-y-5 text-start">
        <h2>Reviews</h2>
        <ProductRatingInfo />
        <LinkBtn label="Write a review" destination="/product_page/write_review"/>
      </div>
      <SortByBtn />
    </div>
  );
};

export default ReviewAndSort;
