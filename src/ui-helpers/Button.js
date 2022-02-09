import React from "react";

const Button = ({ color, title, type, style, onClick, size }) => {
  return (
    <button
      className={`${
        type && type === "solid" ? `bg-${color || "black"}` : "bg-transparent"
      } ${style && style.className} p-5 border-2 rounded-md ${
        size === "lg"
          ? "w-2/3 text-2xl"
          : size === "md"
          ? "w-1/2 text-xl"
          : "w-1/3 text-lg"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
