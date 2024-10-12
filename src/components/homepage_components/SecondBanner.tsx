import LinkBtn from "../elements/LinkBtn";

const SecondBanner = () => {
  return (
    <div className="bg-BackgroundGray py-5">
      <div className="text-start max-w-1116 m-auto space-y-5 flex justify-between">
        <div className="space-y-5 my-auto flex flex-col w-96">
          <h2>Browse Our Fashion Paradise!</h2>
          <p className="pb-6">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
          <LinkBtn
            destination="/listing_page"
            label="View Collection"
            img="/img/icons/Arrow Right.png"
            reverse={true}
            className='w-52'
          />
        </div>
        <div className="">
          <img
            src="/img/banner/category_Image.png"
            alt="star"
            className="w-56"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
