import LinkBtn from "../elements/LinkBtn";

const DetailsAndReviews = () => {
  return (
    <div className="space-y-5 md:w-1/4 pb-5">
      <LinkBtn destination='details_content' img='/img/icons/more.png' label='Details' variant='sidebar'/>
      <LinkBtn destination='reviews_content' img='/img/icons/empty_star.png' label='Reviews' variant='sidebar'/>
    </div>
  );
};

export default DetailsAndReviews;
