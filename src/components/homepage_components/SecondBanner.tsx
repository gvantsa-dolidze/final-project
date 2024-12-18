import LinkBtn from "../elements/LinkBtn";

const SecondBanner = () => {
  return (
    <div className="bg-BackgroundGray py-5">
        <div className="text-start max-w-1116 m-auto flex md:justify-between justify-center items-center p-2">
        <div className="space-y-5 my-auto flex flex-col w-96 md:items-start items-center">
          <h2>Browse Our Fashion Paradise!</h2>
          <p className="pb-6 text-center md:text-start">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
          <LinkBtn
            destination="/listing_page?offset=1"
            label="View Collection"
            img="/img/icons/arrow_right.png"
            reverse={true}
            className='w-52'
          />
        </div>
        <div className="hidden md:block">
          <img
            src="/img/banner/white_poncho.png"
            alt="star"
            className="w-56"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
