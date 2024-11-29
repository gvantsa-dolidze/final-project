import InputElement from "../elements/InputElement";
import Button from "../elements/Button";
import PopOver2 from "../elements/PopOver2";

const Password = () => {
  return (
    <div className="flex justify-start px-5">
      <div className="w-96 space-y-5 text-start">
        <div className="flex justify-between">
          <h3 className="text-start">Change Password</h3>
          <PopOver2 categories="My Account" className="md:hidden block"/>
        </div>
        <form action="" className="space-y-5">
          <InputElement text="New Password" type="password" placeholder="" />
          <InputElement text="Confirm Password" type="password" placeholder="" />
          <div>
            <Button label="Change Password" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Password