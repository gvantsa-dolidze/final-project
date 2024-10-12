import InputElement from "../elements/InputElement";
import Button from "../elements/Button";

const Password = () => {
  return (
    <div className="flex justify-start pl-10">
      <div className="w-96 space-y-5 text-start">
        <h3>Change Password</h3>
        <form action="" className="space-y-5">
          <InputElement text="New Password" type="password" placeholder="" />
          <InputElement text="Confirm Password" type="password" placeholder="" />
          <div>
            <Button label="Change Password"  />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Password