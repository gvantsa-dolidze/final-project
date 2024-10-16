import ResetPasswordForm from "../components/authentication_pages_components/ResetPasswordForm";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";

const ResetPassword = () => {
  return (
    <Layout>
      <div className="bg-BackgroundGray">
        <div className="max-w-1116 m-auto py-5">
          <Breadcrumb
            title="Reset Password"
            label="Ecommerce"
            secondaryLabel="Reset Password"
            destination="/"
            secondaryDestination="/reset_password_page"
          />
        </div>
      </div>
      <div className="max-w-1116 m-auto flex justify-center">
        <ResetPasswordForm />
      </div>
    </Layout>
  );
};

export default ResetPassword;
