import Button from "../elements/Button";
import InputElement from "../elements/InputElement";
import LinkBtn from "../elements/LinkBtn";

const LoginForm = () => {
  return (
    <form action="" className="space-y-5">
      <InputElement text="Email" type="email" placeholder="" id="login_email" />
      <InputElement
        text="password"
        type="password"
        placeholder=""
        id="login_pass"
      />

      <div className="flex flex-col gap-5 w-96">
        <LinkBtn
          label="Forgot Password?"
          variant="link"
          destination="/forgot_password_page"
        />
        <Button label="Login" />
        <LinkBtn
          label="Don't have an account? Sign up"
          variant="link"
          destination="/sign_up_page"
        />
      </div>
    </form>
  );
};

export default LoginForm;
