import Button from "../elements/Button";
import InputElement from "../elements/InputElement";
import LinkBtn from "../elements/LinkBtn";
import { useNavigate } from "react-router";

const SignUpForm = () => {
  const navigate = useNavigate();

  const signUp = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/profile_page");
  };

  return (
    <form className="space-y-5" onSubmit={signUp}>
      <InputElement text="name" type="text" placeholder="" />
      <InputElement text="Email" type="email" placeholder="" />
      <InputElement text="password" type="password" placeholder="" />
      <p className="pb-6">
        By creating an account you agree with our Terms of Service, Privacy
        Policy,
      </p>
      <div className="flex flex-col gap-5">
        <Button label="Create account" type="submit" />
        <LinkBtn
          label="Already have an account? Log in"
          variant="link"
          destination="/login_page"
        />
      </div>
    </form>
  );
};

export default SignUpForm;
