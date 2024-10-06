import React from "react";
import Button from "../elements/Button";
const EmailInput = () => {
  return (
    <form className="flex items-center gap-3">
      <input
        type="email"
        placeholder="Your email address"
        className="outline-none border py-2 px-3 rounded-md bg-[#F6F6F6] text-sm box-border"
      />
      <Button 
         label='Subscribe'
         destination='/' 
      />
    </form>
  );
};

export default EmailInput;
