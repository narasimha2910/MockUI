import React from "react";
import Card from "../ui-helpers/Card";

const Middle = () => {
  return (
    <div className="">
      <div className="flex justify-between md:flex-wrap md:text-center md:w-screen md:items-center md:justify-center">
        <div>
          <div className="text-9xl w-1/2 ml-10 mt-11 lg:text-7xl md:w-5/6 md:text-3xl">
            MAKING HISTORY
          </div>
          <div className="ml-10 text-3xl mt-5 w-1/2 lg:text-2xl md:w-5/6 md:text-xl">
            Since launching in February 2021, creators have earned...
          </div>
          <div className="ml-10 text-7xl lg:text-6xl mt-10 w-1/2 md:w-5/6 md:text-3xl">
            51,335 ETH
          </div>
          <div className="ml-10 mt-8 text-[#8c8c8c] text-xl md:text-base md:w-5/6">
            $143,169,952.98
          </div>
        </div>
        <div>
          <img
            className="w-80 mr-24 lg:mt-8 md:ml-20 md:w-60"
            src="https://foundation.app/images/shapes/cube.png"
            alt=""
          />
        </div>
      </div>
      <div className="text-9xl ml-10 mt-20 mb-10 w-5/6 lg:text-7xl md:text-3xl md:text-center md:w-5/6 md:items-center md:justify-center ">
        WHAT CREATORS HAVE TO SAY
      </div>
      <div className="flex flex-wrap ml-5">
        <div className="w-1/2 md:w-screen">
          <Card />
        </div>
        <div className="w-1/2 md:w-screen">
          <Card />
        </div>
        <div className="w-1/2 md:w-screen">
          <Card />
        </div>
        <div className="w-1/2 md:w-screen">
          <Card />
        </div>
      </div>
      <div className="text-9xl ml-10 mt-20 mb-10 w-5/6 lg:text-7xl md:text-3xl md:text-center md:w-5/6 md:items-center md:justify-center">
        WHAT COLLECTORS HAVE TO SAY
      </div>
      <div className="flex flex-wrap ml-5">
        <div className="w-1/2 md:w-screen">
          <Card />
        </div>
        <div className="w-1/2 md:w-screen">
          <Card />
        </div>
        <div className="w-1/2 md:w-screen">
          <Card />
        </div>
        <div className="w-1/2 md:w-screen">
          <Card />
        </div>
      </div>

      <div className="text-9xl ml-10 mt-20 mb-10 w-5/6 lg:text-7xl md:text-3xl md:text-center md:w-5/6 md:items-center md:justify-center">
        HOW IT WORKS
      </div>
      <div className="flex flex-wrap ml-10">
        <div className="w-1/2 mt-5 sm:w-full">
          <div className="text-3xl md:text-2xl">For Creators</div>
          <div className="text-xl mt-3 w-4/5 lg:text-lg md:text-base">
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
          <div className="text-3xl md:text-2xl">For Collectors</div>
          <div className="text-xl mt-3 w-4/5 lg:text-lg md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi
            eius enim deserunt voluptasLorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste animi eius enim deserunt voluptas Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Iste animi eius enim
            deserunt voluptas Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </div>
        </div>
        <div className="w-1/2 mt-5 sm:w-full">
          <div className="text-3xl md:text-2xl">For The Community</div>
          <div className="text-xl mt-3 w-4/5 lg:text-lg md:text-base">
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
          <div className="text-3xl md:text-2xl">For Developers</div>
          <div className="text-xl mt-3 w-4/5 lg:text-lg md:text-base">
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
