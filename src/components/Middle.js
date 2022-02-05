import React from "react";
import Card from "../ui-helpers/Card";

const Middle = () => {
  return (
    <div className="">
      <div className="flex justify-between lg:flex-wrap md:text-center md:mx-[25%] sm:mx-[15%]">
        <div>
          <div className="text-9xl w-1/2 ml-10 mt-11 lg:text-7xl sm:text-5xl sm:w-full sm:mx-[1%]">
            MAKING HISTORY
          </div>
          <div className="ml-10 text-3xl mt-5 w-1/2 lg:text-2xl md:mx-[25%] sm:mx-[1%] sm:w-full">
            Since launching in February 2021, creators have earned...
          </div>
          <div className="ml-10 text-7xl lg:text-6xl mt-10 w-1/2 md:mx-[25%] sm:mx-[1%] sm:w-full">
            51,335 ETH
          </div>
          <div className="ml-10 mt-8 text-[#8c8c8c] text-xl md:mx-[25%] sm:mx-0">
            $143,169,952.98
          </div>
        </div>
        <div>
          <img
            className="w-80 mr-24 lg:w-72 lg:mt-8 md:mx-[24%]"
            src="https://cdn-icons-png.flaticon.com/512/1213/1213797.png"
            alt=""
          />
        </div>
      </div>
      <div className="text-9xl ml-10 mt-20 mb-10 w-5/6 lg:text-7xl sm:text-5xl sm:w-2/3 sm:mx-[17%] sm:text-center">
        WHAT CREATORS HAVE TO SAY
      </div>
      <div className="flex flex-wrap ml-5">
        <div className="w-1/2">
          <Card />
        </div>
        <div className="w-1/2">
          <Card />
        </div>
        <div className="w-1/2">
          <Card />
        </div>
        <div className="w-1/2">
          <Card />
        </div>
      </div>
      <div className="text-9xl ml-10 mt-20 mb-10 w-5/6 lg:text-7xl sm:text-5xl sm:w-2/3 sm:mx-[17%] sm:text-center">
        WHAT COLLECTORS HAVE TO SAY
      </div>
      <div className="flex flex-wrap ml-5">
        <div className="w-1/2">
          <Card />
        </div>
        <div className="w-1/2">
          <Card />
        </div>
        <div className="w-1/2">
          <Card />
        </div>
        <div className="w-1/2">
          <Card />
        </div>
      </div>

      <div className="text-9xl ml-10 mt-20 mb-10 w-5/6 lg:text-7xl sm:text-5xl sm:w-2/3 sm:mx-[17%] sm:text-center">
        HOW IT WORKS
      </div>
      <div className="flex flex-wrap ml-10">
        <div className="w-1/2 mt-5 sm:w-full">
          <div className="text-3xl">For Creators</div>
          <div className="text-xl mt-3 w-4/5 lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi
            eius enim deserunt voluptasLorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste animi eius enim deserunt voluptas Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Iste animi eius enim
            deserunt voluptas Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iste animi eius enim deserunt voluptas Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iste animi eius enim deserunt
            voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iste animi eius enim deserunt voluptas
          </div>
        </div>
        <div className="w-1/2 mt-5 sm:w-full">
          <div className="text-3xl">For Collectors</div>
          <div className="text-xl mt-3 w-4/5 lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi
            eius enim deserunt voluptasLorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste animi eius enim deserunt voluptas Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Iste animi eius enim
            deserunt voluptas Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </div>
        </div>
        <div className="w-1/2 mt-5 sm:w-full">
          <div className="text-3xl">For The Community</div>
          <div className="text-xl mt-3 w-4/5 lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi
            eius enim deserunt voluptasLorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste animi eius enim deserunt voluptas Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Iste animi eius enim
            deserunt voluptas Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iste animi eius enim deserunt voluptas Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="w-1/2 mt-5 sm:w-full">
          <div className="text-3xl">For Developers</div>
          <div className="text-xl mt-3 w-4/5 lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi
            eius enim deserunt voluptasLorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste animi eius enim deserunt voluptas Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
