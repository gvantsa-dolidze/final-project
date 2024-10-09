import Breadcrumb from "../components/elements/Breadcrumb";
import Button from "../components/elements/Button";
import InputElement from "../components/elements/InputElement";
import ContinueWithGoogle from "../components/authentication_pages_components/ContinueWithGoogle";
import HorizontalLine from "../components/authentication_pages_components/HorizontalLine";

const SignUpPage = () => {
  return (
    <div>
      <div className="bg-BackgroundGray">
        <Breadcrumb />
      </div>
      <div className="max-w-1116 m-auto flex justify-center">
        <div className="py-10">
          <div className="flex flex-col items-center gap-5 w-96 py-10">
            <ContinueWithGoogle />

            <HorizontalLine />
            <form action="" className="space-y-5">
              <InputElement text="name" type="text" placeholder="" />
              <InputElement text="Email" type="email" placeholder="" />
              <InputElement text="password" type="password" placeholder="" />
              <p className="pb-6">
                By creating an account you agree with our Terms of Service,
                Privacy Policy,
              </p>
              <div className="flex flex-col gap-5">
                <Button label="Create account" destination="/" />
                <Button
                  label="Already have an account? Log in"
                  destination="/login_page"
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

export default SignUpPage;
