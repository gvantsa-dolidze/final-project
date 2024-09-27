import Button from "../elements/Button";
const Banner = () => {
  return (
    <div className="bg-BackgroundGray py-40">
      <div className="text-start max-w-1116 m-auto space-y-5 flex justify-between">
        <div className="space-y-5">
          <h2>Fresh Arrivals Online</h2>
          <p>Discover Our Newest Collection Today.</p>
          <Button label="View Collection" />
        </div>
        <div>
          <img src="/img/banner/star.png" alt="star" />
          <img src="/img/banner/ellipse.png" alt="ellipse" />
          <img
            src="/img/banner/guy_img.png"
            alt="guy_img"
            className="w-[255px] h-[382]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
