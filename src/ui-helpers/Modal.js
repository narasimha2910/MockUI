import React from "react";
import ReactDOM from "react-dom";

const Modal = ({
  heading,
  children,
  btn1,
  btn2,
  setVisible,
  btn1ClickHandler,
  btn2ClickHandler,
}) => {
  return ReactDOM.createPortal(
    <>
      <div
        className="bg-black fixed top-0 left-0 right-0 bottom-0 opacity-50 z-50"
        onClick={() => setVisible(false)}
      ></div>
      <div className="bg-white top-[25%] left-[35%]  h-3/6 w-1/3 opacity-100 z-50 fixed rounded-lg shadow-xl text-center">
        <div>
          <div className="text-4xl mt-4 mb-8">{heading}</div>
          <button
            className="absolute right-2 top-1 bg-red-400 hover:bg-red-600 w-6 rounded"
            onClick={() => setVisible(false)}
          >
            {" "}
            x{" "}
          </button>
        </div>
        <div className="">{children}</div>
        <div className="absolute bottom-4 w-full h-8">
          <div className="flex justify-evenly">
            {btn1 && (
              <button
                className="bg-gray-600 text-gray-50 rounded-lg w-4/12 text-2xl hover:bg-gray-800"
                onClick={btn1ClickHandler}
              >
                {btn1}
              </button>
            )}

            {btn2 && (
              <button
                className="bg-gray-600 text-gray-50 rounded-lg w-4/12 text-2xl hover:bg-gray-800 "
                onClick={btn2ClickHandler}
              >
                {btn2}
              </button>
            )}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
