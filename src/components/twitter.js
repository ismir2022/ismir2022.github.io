import React from "react";
import { useEffect, useState, useRef } from "react";
import { Script } from "gatsby";


const Twitter = () => {
  useEffect(() => {
    let script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    document.getElementById("widget").appendChild(script);
  }, []);

  return (
    <div id="widget" className="bg-[#FCF0E1] mt-5 md:mt-0 max-w-500 h-550">
      <a
        class="twitter-timeline"
        href="https://twitter.com/ISMIRConf?ref_src=twsrc%5Etfw"
        data-width="500"
        data-height="550"
      ></a>{" "}
    </div>
  );
};

export default Twitter;
