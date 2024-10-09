import ResetPasswordForm from "../components/authentication_pages_components/ResetPasswordForm";
import Breadcrumb from "../components/elements/Breadcrumb";

const ResetPassword = () => {
  return (
    <div>
      <div className="bg-BackgroundGray">
        <Breadcrumb label='Reset Password' title='Reset Password'/>
      </div>
      <div className="max-w-1116 m-auto flex justify-center">
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPassword;
