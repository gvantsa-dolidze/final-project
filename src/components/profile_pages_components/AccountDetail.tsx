import { useState } from "react";
import InitialsAvatar from "../elements/InitialsAvatar";
import InputElement from "../elements/InputElement";
import Button from "../elements/Button";
import PopOver2 from "../elements/PopOver2";

const AccountDetail = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim()) {
      setMessage("Please fill in all the fields.");
      return;
    }

    setMessage("Your account details have been updated successfully.");
  };

  return (
    <div className="flex justify-start px-5">
      <div className="md:w-96 w-full space-y-5 text-start">
        <div className="flex justify-between">
          <h3 className="text-start">Account Details</h3>
          <PopOver2 categories="My Account" className="md:hidden block" />
        </div>
        <InitialsAvatar />
        <form onSubmit={handleSubmit} className="space-y-5">
          <InputElement 
            text="Full Name" 
            type="text" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder=""
            required
          />
          <InputElement 
            text="Email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            required
          />
          <div>
            <Button label="Save Changes" type="submit" />
          </div>
          {message && <p className="text-blue-800">{message}</p>}

        </form>
      </div>
    </div>
  );
};

export default AccountDetail;
