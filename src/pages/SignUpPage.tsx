import Breadcrumb from "../components/elements/Breadcrumb";
import ContinueWithGoogle from "../components/authentication_pages_components/ContinueWithGoogle";
import HorizontalLine from "../components/authentication_pages_components/HorizontalLine";
import SignUpForm from "../components/authentication_pages_components/SignUpForm";

const SignUpPage = () => {
  return (
    <div>
      <div className="bg-BackgroundGray">
        <Breadcrumb label='Sign up' title='Sign up'/>
      </div>
      <div className="max-w-1116 m-auto flex justify-center">
          <div className="flex flex-col items-center gap-5 w-96 py-10">
            <ContinueWithGoogle />
            <HorizontalLine />
            <SignUpForm />
          </div>
        
      </div>
    </div>
  );
};

export default SignUpPage;
