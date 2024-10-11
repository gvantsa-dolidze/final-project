import AboutShipping from "../components/homepage_components/AboutShipping"
import Banner from "../components/homepage_components/Banner"
import BestSelling from "../components/homepage_components/BestSelling"
import FeaturedLatest from "../components/homepage_components/FeaturedLatest"
import SecondBanner from "../components/homepage_components/SecondBanner"
import Layout from "../components/layout/Layout"

const Home = () => {
  return (
    <Layout>
      <Banner />
      <AboutShipping />
      <BestSelling />
      <SecondBanner />
      <FeaturedLatest />
    </Layout>
  )
}

export default Home