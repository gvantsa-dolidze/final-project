import Button from "../elements/Button";
import InputElement from "../elements/InputElement";
const ResetPasswordForm = () => {
  return (
    <form action="" className="space-y-5 py-32 w-96">
      <InputElement text="New password" type="password" placeholder="" />
      <InputElement text="Confirm password" type="password" placeholder="" />
      <div className="flex flex-col gap-5">
        <Button label="Reset password"/>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
