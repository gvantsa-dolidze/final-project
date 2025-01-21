import { useState } from "react";
import Button from "../elements/Button";
import InputElement from "../elements/InputElement";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please fill in all the fields.");
      return;
    }

    setMessage("We have sent a reset link. Please check your email");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {message && <p className="text-red-500">{message}</p>}

      <InputElement 
        text="Email" 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <div className="flex flex-col gap-5">
        <Button label="Send reset link" type="submit" />
      </div>
    </form>
  );
};

export default ForgotPasswordForm;

