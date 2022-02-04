import React from "react";
import Card from "../ui-helpers/Card";

const Middle = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <div className="text-9xl w-1/2 ml-10 mt-10">MAKING HISTORY</div>
          <div className="ml-10 text-3xl mt-5 w-1/2">
            Since launching in February 2021, creators have earned...
          </div>
          <div className="ml-10 text-7xl mt-10 w-1/2">51,335 ETH</div>
          <div className="ml-10 mt-8 text-[#8c8c8c] text-xl">
            $143,169,952.98
          </div>
        </div>
        <div>
          <img
            className="w-80 mr-24"
            src="https://cdn-icons-png.flaticon.com/512/1213/1213797.png"
            alt=""
          />
        </div>
      </div>
      <div className="text-9xl ml-10 mt-20 mb-10 w-5/6">
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
      <div className="text-9xl ml-10 mt-20 mb-10 w-5/6">
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

      <div className="text-9xl ml-10 mt-20 mb-10 w-5/6">HOW IT WORKS</div>
      <div className="flex flex-wrap ml-10">
        <div className="w-1/2 mt-5">
          <div className="text-3xl">For Creators</div>
          <div className="text-xl mt-3 w-4/5">
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
        <div className="w-1/2 mt-5">
          <div className="text-3xl">For Collectors</div>
          <div className="text-xl mt-3 w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi
            eius enim deserunt voluptasLorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste animi eius enim deserunt voluptas Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Iste animi eius enim
            deserunt voluptas Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </div>
        </div>
        <div className="w-1/2 mt-5">
          <div className="text-3xl">For The Community</div>
          <div className="text-xl mt-3 w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi
            eius enim deserunt voluptasLorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste animi eius enim deserunt voluptas Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Iste animi eius enim
            deserunt voluptas Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iste animi eius enim deserunt voluptas Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="w-1/2 mt-5">
          <div className="text-3xl">For Developers</div>
          <div className="text-xl mt-3 w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi
            eius enim deserunt voluptasLorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste animi eius enim deserunt voluptas Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
