import Button from "../elements/Button";
const Banner = () => {
  return (
    <div className="bg-BackgroundGray py-5">
      <div className="text-start max-w-1116 m-auto space-y-5 flex justify-between">
        <div className="space-y-5 my-auto">
          <h2>Fresh Arrivals Online</h2>
          <p>Discover Our Newest Collection Today.</p>
          <Button label="View Collection" />
        </div>
        <div className="relative">
          <img
            src="/img/banner/star.png"
            alt="star"
            className="absolute top-0 left-0"
          />
          <img
            src="/img/banner/ellipse.png"
            alt="ellipse"
            className="w-full h-auto"
          />
          <img
            src="/img/banner/guy_img.png"
            alt="guy_img"
            className="w-[255px] h-[382px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
