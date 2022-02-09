import React from "react";
import Button from "../ui-helpers/Button";

const ImaButton = () => {
  const onClick = () => {
    alert("I was clicked");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Button
        title="Click Me"
        type="border"
        color="white"
        onClick={onClick}
        size=""
        style={{className : "hover:bg-black hover:text-white"}}
      />
    </div>
  );
};

export default ImaButton;
