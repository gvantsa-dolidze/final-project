import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="bg-BackgroundGray">
        <div className="max-w-1116 m-auto py-5">
          <Breadcrumb
            title="About"
            label="Ecommerce"
            secondaryLabel="Contact"
            destination="/"
            secondaryDestination="/about"
          />
        </div>
      </div>
      <div className="max-w-1116 m-auto">
        about
      </div>
    </Layout>
  );
};

export default About;

