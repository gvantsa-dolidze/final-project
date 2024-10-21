import ForgotPasswordForm from "../components/authentication_pages_components/ForgotPasswordForm";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";

const ForgotPassword = () => {
  return (
    <Layout>
      <div className="bg-BackgroundGray">
        <div className="max-w-1116 m-auto py-5">
          <Breadcrumb
            title="Forgot Password"
            label="Ecommerce"
            secondaryLabel="Forgot Password"
            destination="/"
            secondaryDestination="/forgot_password_page"
          />
        </div>
      </div>
      <div className="max-w-1116 m-auto flex justify-center">
        <div className="w-80 py-32 space-y-10">
          <div>
            <p>
              Please enter the email address associated with your account. We'll
              promptly send you a link to reset your password.
            </p>
          </div>

          <ForgotPasswordForm />
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
