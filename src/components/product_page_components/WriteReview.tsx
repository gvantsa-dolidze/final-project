import React from "react";
import InputElement from "../elements/InputElement";
import Button from "../elements/Button";
import FiveStar from "../elements/FiveStar";

const WriteReview = () => {
  return (
    <div className="text-start space-y-10 w-3/4">
      <form action="" className="w-80 space-y-4">
        <InputElement type="email" text="Email" />
        <InputElement type="email" text="Full name" />
        <div>
          <label htmlFor="comment" className="">
            Review
          </label>
          <textarea className="w-80 h-40 border rounded-md resize-none outline-none px-3 py-2 mt-1" id="comment"></textarea>
        </div>
        <FiveStar />
        <Button label='Submit Your Review' className="w-full"/>
      </form>
    </div>
  );
};

export default WriteReview;
