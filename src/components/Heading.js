import React from "react";
import TextScroller from "../ui-helpers/TextScroller";

const Heading = () => {
  return (
    <>
      <div className="flex lg:flex-wrap">
        <div className="md:text-center">
          <div className="text-9xl lg:text-6xl sm:text-5xl w-20 mt-16 ml-10 md:w-full md:mx-[1%]">
            ABOUT METASTART
          </div>
          <div className="text-2xl lg:text-xl ml-10 mt-4 w-1/3 md:mx-[17%] md:w-2/3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            cumque accusantium ab, repellat sit ipsa vitae dolor harum
            explicabo, fugiat sint. Saepe, hic iure? Dignissimos perferendis
            architecto dolorem fuga est?
          </div>
        </div>
        <div>
          <img
            className="mt-40 lg:mt-5 lg:w-72 md:mx-[75%] sm:w-64 sm:mx-[70%]"
            src="https://cutewallpaper.org/24/random-png/logo-random-png-download-logo-random-png-transparent-png-transparent-png-image-pngitem.png"
            alt=""
          />
        </div>
      </div>
      <div className="overflow-y-hidden">
        <TextScroller text="LOREM IPSUM LOREM IPSUM" />
      </div>
      <div className="md:text-center">
        <div className="text-2xl lg:text-xl ml-10 mt-4 w-96 md:mx-[25%] sm:mx-[17%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam culpa
          ipsam nisi tempora atque autem facilis veniam quos recusandae officiis
          vitae et in, animi nihil iure ullam adipisci voluptatum explicabo.
        </div>
      </div>
    </>
  );
};

export default Heading;
