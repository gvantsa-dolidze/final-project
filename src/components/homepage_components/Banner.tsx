import BannerImg from "../elements/BannerImg";
import LinkBtn from "../elements/LinkBtn";

const Banner = () => {
  return (
    <div className="bg-BackgroundGray py-5">
      <div className="text-start max-w-1116 m-auto h-[460px] flex md:justify-between justify-center items-center p-2">
        <div className="space-y-5 my-auto flex flex-col w-96 md:items-start items-center">
          <h2>Fresh Arrivals Online</h2>
          <p className="pb-6">Discover Our Newest Collection Today.</p>
          <LinkBtn
            destination="/listing_page"
            label="View Collection"
            img="/img/icons/Arrow Right.png"
            reverse={true}
            className='w-52'
          />
        </div>
       <BannerImg />
      </div>
    </div>
  );
};

export default Banner;
