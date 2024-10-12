import Button from "../elements/Button";
import InputElement from "../elements/InputElement";

const EmailInput = () => {
  return (
    <form className="flex items-center gap-3">
      <InputElement text="" type="email" placeholder="Your email address" />
      <Button label="Subscribe"/>
    </form>
  );
};

export default EmailInput;
