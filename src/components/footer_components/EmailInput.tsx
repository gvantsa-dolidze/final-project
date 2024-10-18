import Button from "../elements/Button";
import InputElement from "../elements/InputElement";

const EmailInput = () => {
  return (
    <form className="flex gap-3 justify-center">
      <InputElement text="" type="email" placeholder="Your email address" />
      <Button label="Subscribe"/>
    </form>
  );
};

export default EmailInput;
