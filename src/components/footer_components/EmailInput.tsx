import React from "react";

const EmailInput = () => {
  return (
    <form className="flex items-center gap-4">
      <input
        type="email"
        placeholder="Your email address"
        className="outline-none"
      />
      <button>Subscribe</button>
    </form>
  );
};

export default EmailInput;
