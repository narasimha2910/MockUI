import React from "react";
import TextScroller from "../ui-helpers/TextScroller";

const Heading = () => {
  return (
    <>
      <div className="flex">
        <div>
          <div className="text-9xl w-20 mt-16 ml-10">ABOUT METASTART</div>
          <div className="text-2xl ml-10 mt-4 w-1/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            cumque accusantium ab, repellat sit ipsa vitae dolor harum
            explicabo, fugiat sint. Saepe, hic iure? Dignissimos perferendis
            architecto dolorem fuga est?
          </div>
        </div>
        <div>
          <img
            className=" mt-40"
            src="https://cutewallpaper.org/24/random-png/logo-random-png-download-logo-random-png-transparent-png-transparent-png-image-pngitem.png"
            alt=""
          />
        </div>
      </div>
      <div className="overflow-y-hidden">
        <TextScroller text="LOREM IPSUM LOREM IPSUM" />
      </div>
      <div>
        <div className="text-2xl ml-10 mt-4 w-96">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam culpa
          ipsam nisi tempora atque autem facilis veniam quos recusandae officiis
          vitae et in, animi nihil iure ullam adipisci voluptatum explicabo.
        </div>
      </div>
    </>
  );
};

export default Heading;
