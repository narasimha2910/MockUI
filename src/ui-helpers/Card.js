import React from "react";

const Card = () => {
  return (
    <div className="bg-white w-11/12 ml-5 h-80 rounded-lg shadow-lg text-lg flex mb-5 mr-3 ">
      <div className="py-36">
        <p className="w-28 -rotate-90 text-2xl">Elon Musk</p>
      </div>
      <div className="mt-20 mr-20">
        <div className="mt-10">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit."
        </div>
        <div className="mt-10 ml-80 pl-1 pr-4 w-44 bg-[#F9F9F9] rounded-2xl shadow-xl flex justify-between">
          <img
            className="w-10 rounded-full bg-white"
            src="https://user-images.githubusercontent.com/12670730/113008567-6ebdcb80-9177-11eb-91bd-6863196d9cd3.png"
            alt=""
          />
          @elon_musk
        </div>
      </div>
    </div>
  );
};

export default Card;
