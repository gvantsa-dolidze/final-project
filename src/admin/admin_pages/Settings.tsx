import React from "react";
import InputElement from "../../components/elements/InputElement";

const Settings = () => {
  return (
    <div className="bg-white rounded-md border">
      <div className="border-b p-7 text-start">Settings</div>
      <form action="" className="w-96 px-7 pb-52 pt-16 space-y-7">
        <InputElement type="text" text="Site Name" />
        <InputElement type="email" text="Support Email" />
        <InputElement type="email" text="Monthly Order Goal" />
      </form>
    </div>
  );
};

export default Settings;
