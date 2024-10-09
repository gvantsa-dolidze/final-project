import Breadcrumb from "../components/elements/Breadcrumb";
import Button from "../components/elements/Button";
import InputElement from "../components/elements/InputElement";

const ForgotPassword = () => {
  return (
    <div>
      <div className="bg-BackgroundGray">
        <Breadcrumb />
      </div>
      <div className="max-w-1116 m-auto">
        <div className="py-10">
          <div className="flex flex-col items-center gap-5 ">
            <div>
              <p>
                Please enter the email address associated with your account.
                We'll promptly send you a link to reset your password.
              </p>
            </div>
            <form action="" className="space-y-5">
              <InputElement text="Email" type="email" placeholder="" />

              <div className="">
                <Button label="Send reset link" destination="/" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
