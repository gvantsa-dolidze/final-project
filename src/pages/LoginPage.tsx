import HorizontalLine from "../components/authentication_pages_components/HorizontalLine";
import Breadcrumb from "../components/elements/Breadcrumb";
import LoginForm from "../components/authentication_pages_components/LoginForm";
import Layout from "../components/layout/Layout";
import Button from "../components/elements/Button";

const LoginPage = () => {
  return (
    <Layout>
      <div className="bg-BackgroundGray">
        <div className="max-w-1116 m-auto py-5">
          <Breadcrumb
            title="Login"
            label="Ecommerce"
            secondaryLabel="Login"
            destination="/"
            secondaryDestination="/login_page"
          />
        </div>
      </div>
      <div className="max-w-1116 m-auto flex justify-center py-10">
        <div className="flex flex-col items-center gap-5 w-80 py-10">
          <Button
            label="Continue with Google"
            variant="light"
            img="/img/social_icons/google.png"
            className="w-full"
          />
          <HorizontalLine />
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
