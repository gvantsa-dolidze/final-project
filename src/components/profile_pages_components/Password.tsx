import { useState } from "react";
import InputElement from "../elements/InputElement";
import Button from "../elements/Button";
import PopOver2 from "../elements/PopOver2";

const Password = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newPassword.trim() || !confirmPassword.trim()) {
      setMessage("Please fill in all the fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage("Your password has been successfully changed.");
  };

  return (
    <div className="flex justify-start px-5">
      <div className="md:w-96 w-full space-y-5 text-start">
        <div className="flex justify-between">
          <h3 className="text-start">Change Password</h3>
          <PopOver2 categories="My Account" className="md:hidden block" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <InputElement 
            text="New Password" 
            type="password" 
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder=""
            required
          />
          <InputElement 
            text="Confirm Password" 
            type="password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder=""
            required
          />
          <div>
            <Button label="Change Password" type="submit" />
          </div>
          {message && <p className="text-blue-800">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Password;
