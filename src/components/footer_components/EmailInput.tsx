import React from "react";
import Button from "../elements/Button";
const EmailInput = () => {
  return (
    <form className="flex items-center gap- ">
      <input
        type="email"
        placeholder="Your email address"
        className="outline-none"
      />
      <Button 
         label='Subscribe'
      />
    </form>
  );
};

export default EmailInput;
