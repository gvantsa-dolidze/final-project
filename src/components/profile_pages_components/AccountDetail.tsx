import InitialsAvatar from "../elements/InitialsAvatar";
import InputElement from "../elements/InputElement";
import Button from "../elements/Button";

const AccountDetail = () => {
  return (
    <div className="flex justify-start pl-10">
      <div className="w-96 space-y-5 text-start">
        <h3>Account Details</h3>
        <InitialsAvatar />
        <form action="" className="space-y-5">
          <InputElement text="Full Name" type="text" placeholder="" />
          <InputElement text="Email" type="Email" placeholder="" />
          <div>
            <Button label="Save Changes" destination="/" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetail;
