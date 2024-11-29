import InitialsAvatar from "../elements/InitialsAvatar";
import InputElement from "../elements/InputElement";
import Button from "../elements/Button";
import PopOver2 from "../elements/PopOver2";

const AccountDetail = () => {
  return (
    <div className="flex justify-start pl-10">
      <div className="w-96 space-y-5 text-start">
        <div className="flex justify-between">
          <h3 className="text-start md:hidden block">Account Details</h3>
          <PopOver2 categories="My Account" />
        </div>
        <InitialsAvatar />
        <form action="" className="space-y-5">
          <InputElement text="Full Name" type="text" placeholder="" />
          <InputElement text="Email" type="Email" placeholder="" />
          <div>
            <Button label="Save Changes"  />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetail;
