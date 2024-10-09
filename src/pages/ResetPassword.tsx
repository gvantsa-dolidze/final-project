import Breadcrumb from "../components/elements/Breadcrumb";
import Button from "../components/elements/Button";
import InputElement from "../components/elements/InputElement";

const ResetPassword = () => {
  return (
    <div>
      <div className="bg-BackgroundGray">
        <Breadcrumb />
      </div>
      <div className="max-w-1116 m-auto flex justify-center">
        <form action="" className="space-y-5 py-32 w-96">
          <InputElement text="New password" type="password" placeholder="" />
          <InputElement text="Confirm password" type="password" placeholder="" />
          <div className="flex flex-col gap-5">
            <Button label="Reset password" destination="/" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
