import AboutShipping from "../components/homepage_components/AboutShipping"
import Banner from "../components/homepage_components/Banner"
import BestSelling from "../components/homepage_components/BestSelling"
import FeaturedLatest from "../components/homepage_components/FeaturedLatest"
import SecondBanner from "../components/homepage_components/SecondBanner"

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutShipping />
      <BestSelling />
      <SecondBanner />
      <FeaturedLatest />
    </div>
  )
}

export default Home