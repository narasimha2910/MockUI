import React from "react";
import TextScroller from "../ui-helpers/TextScroller";

const Heading = () => {
  return (
    <>
      <div className="flex md:flex-wrap md:items-center md:justify-center md:w-screen">
        <div className="md:text-center">
          <div className="text-9xl lg:text-6xl md:text-3xl w-20 mt-16 ml-10 md:text-center md:w-5/6">
            ABOUT METASTART
          </div>
          <div className="text-2xl lg:text-xl md:text-base mdm:ml-10 mt-4 w-1/3 md:w-5/6 md:ml-8 mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            cumque accusantium ab, repellat sit ipsa vitae dolor harum
            explicabo, fugiat sint. Saepe, hic iure? Dignissimos perferendis
            architecto dolorem fuga est?
          </div>
        </div>
        <div className="mr-10 md:mr-0">
          <img
            className="mt-40 md:mt-5 md:w-60"
            src="https://foundation.app/images/shapes/prism.png"
            alt=""
          />
        </div>
      </div>
      <div className="overflow-y-hidden">
        <TextScroller text="LOREM IPSUM LOREM IPSUM" />
      </div>
      <div className="md:text-center md:w-screen md:flex md:items-center md:justify-center">
        <div className="text-2xl lg:text-xl mdm:ml-10 mt-4 w-96 md:text-base md:w-5/6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam culpa
          ipsam nisi tempora atque autem facilis veniam quos recusandae officiis
          vitae et in, animi nihil iure ullam adipisci voluptatum explicabo.
        </div>
      </div>
    </>
  );
};

export default Heading;
