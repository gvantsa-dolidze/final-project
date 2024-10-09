import Button from "../elements/Button";
import InputElement from "../elements/InputElement";
const LoginForm = () => {
  return (
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
  );
};

export default LoginForm;
