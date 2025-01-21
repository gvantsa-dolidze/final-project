import { useState } from "react";
import Button from "../elements/Button";
import InputElement from "../elements/InputElement";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [buttonText, setButtonText] = useState("Subscribe"); // Track the button text

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setButtonText("Subscribed"); // Change the button text after submission
    setEmail("");
  };

  return (
    <form className="flex gap-3 justify-center" onSubmit={handleSubmit}>
      <InputElement
        text=""
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
      />
      <Button label={buttonText} type="submit" />
    </form>
  );
};

export default EmailInput;
