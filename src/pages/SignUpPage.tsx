import Breadcrumb from "../components/elements/Breadcrumb";
import HorizontalLine from "../components/authentication_pages_components/HorizontalLine";
import SignUpForm from "../components/authentication_pages_components/SignUpForm";
import Layout from "../components/layout/Layout";
import Button from "../components/elements/Button";

const SignUpPage = () => {
  return (
    <Layout>
      <div className="bg-BackgroundGray">
        <div className="max-w-1116 m-auto py-5">
          <Breadcrumb
            title="Sign Up"
            label="Ecommerce"
            secondaryLabel="Sign Up"
            destination="/"
            secondaryDestination="/sign_up_page"
          />
        </div>
      </div>
      <div className="max-w-1116 m-auto flex justify-center">
        <div className="flex flex-col items-center gap-5 w-80 py-10">
          <Button
            label="Continue with Google"
            variant="light"
            img="/img/social icons/Google.png"
            className="w-full"
          />
          <HorizontalLine />
          <SignUpForm />
        </div>
      </div>
    </Layout>
  );
};

export default SignUpPage;
