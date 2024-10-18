
const BannerImg = () => {
  return (
    <div className="relative hidden md:block">
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
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  </div>
  )
}

export default BannerImg