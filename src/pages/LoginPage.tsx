import ContinueWithGoogle from "../components/authentication_pages_components/ContinueWithGoogle";
import HorizontalLine from "../components/authentication_pages_components/HorizontalLine";
import Breadcrumb from "../components/elements/Breadcrumb";
import Button from "../components/elements/Button";
import InputElement from "../components/elements/InputElement";

const LoginPage = () => {
  return (
    <div>
      <div className="bg-BackgroundGray">
        <Breadcrumb />
      </div>
      <div className="max-w-1116 m-auto flex justify-center py-10">
        <div className="py-10">
          <div className="flex flex-col items-center gap-5 w-96 py-10">
            <ContinueWithGoogle />
            <HorizontalLine />

            <form action="" className="space-y-5">
              <InputElement text="Email" type="email" placeholder="" />
              <InputElement text="password" type="password" placeholder="" />

              <div className="flex flex-col gap-5 w-96">
                <Button
                  label="Forgot Password?"
                  destination="/forgot_password_page"
                  variant="link"
                />
                <Button label="Login" destination="/" />
                <Button
                  label="Don't have an account? Sign up"
                  destination="/sign_up_page"
                  variant="link"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
