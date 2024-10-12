import LinkBtn from "../elements/LinkBtn";

const DetailsAndReviews = () => {
  return (
    <div className="space-y-5 w-[241px]">
      <LinkBtn destination='details_content' img='/img/icons/More.png' label='Details' variant='sidebar'/>
      <LinkBtn destination='reviews_content' img='/img/icons/Empty Star.png' label='Reviews' variant='sidebar'/>
    </div>
  );
};

export default DetailsAndReviews;
