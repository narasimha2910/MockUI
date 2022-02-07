import React from "react";

const Card = () => {
  return (
    <div className="bg-white w-11/12 ml-5 h-80 rounded-lg shadow-lg text-lg flex mb-5 mr-3 overflow-y-hidden md:mx-0 ">
      <div className="my-36 ">
        <p className="w-28 -rotate-90 text-2xl md:text-base md:w-17">
          Elon Musk
        </p>
      </div>
      <div className="mt-20 xl:mt-10 lg:mt-5 mr-20 md:mt-10 md:w-2/3 w-3/4">
        <div className="mt-10">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit."
        </div>
        <div className="mt-10 ml-60 pl-1 pr-4 xl:mx-0 w-44 bg-[#F9F9F9] rounded-2xl shadow-xl flex justify-between lg:mt-8 md:mx-0">
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
