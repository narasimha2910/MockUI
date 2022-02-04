import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const TextScroller = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 8000},
    reset: true,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div
      key={key}
      className="text-8xl h-full overflow-visible text-[#1919FF] mt-10 mb-10"
    >
      <animated.div style={scrolling}>
        <h1>{text}</h1>
      </animated.div>
    </div>
  );
};

export default TextScroller;
