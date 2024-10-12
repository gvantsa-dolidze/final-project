import Button from "../elements/Button";
import InputElement from "../elements/InputElement";
const ForgotPasswordForm = () => {
  return (
    <form action="" className="space-y-5 w-96">
      <InputElement text="Email" type="email" placeholder="" />

      <div className="flex flex-col gap-5">
        <Button label="Send reset link"  />
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
