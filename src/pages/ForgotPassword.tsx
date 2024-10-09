import ForgotPasswordForm from "../components/authentication_pages_components/ForgotPasswordForm";
import Breadcrumb from "../components/elements/Breadcrumb";


const ForgotPassword = () => {
  return (
    <div>
      <div className="bg-BackgroundGray">
        <Breadcrumb />
      </div>
      <div className="max-w-1116 m-auto flex justify-center">
        <div className="w-96 py-32">
          <div className="flex flex-col items-center gap-5 ">
            <div>
              <p>
                Please enter the email address associated with your account.
                We'll promptly send you a link to reset your password.
              </p>
            </div>
            
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
