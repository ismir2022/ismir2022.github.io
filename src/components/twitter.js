import React from "react";
import { Script } from "gatsby";

const Twitter = () => {
  return (
    <div className="mt-5 md:mt-0 max-w-500 h-550">
      <a
        class="twitter-timeline"
        href="https://twitter.com/ISMIRConf?ref_src=twsrc%5Etfw"
        data-width="500"
        data-height="550"
      >
        Tweets by ISMIRConf
      </a>{" "}
      <Script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></Script>
    </div>
  );
};

export default Twitter;
