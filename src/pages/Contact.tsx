import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-BackgroundGray">
        <div className="max-w-1116 m-auto py-5">
          <Breadcrumb
            title="Contact"
            label="Ecommerce"
            secondaryLabel="Contact"
            destination="/"
            secondaryDestination="/contact"
          />
        </div>
      </div>
      <div className="max-w-1116 m-auto">
        contact
      </div>
    </Layout>
  );
};

export default Contact;

