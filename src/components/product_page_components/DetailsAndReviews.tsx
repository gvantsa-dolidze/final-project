import LinkBtn from "../elements/LinkBtn";

const DetailsAndReviews = () => {
  return (
    <div className="space-y-5 w-[241px]">
      <LinkBtn destination='details_content' img='/img/icons/more.png' label='Details' variant='sidebar'/>
      <LinkBtn destination='reviews_content' img='/img/icons/empty_star.png' label='Reviews' variant='sidebar'/>
    </div>
  );
};

export default DetailsAndReviews;
