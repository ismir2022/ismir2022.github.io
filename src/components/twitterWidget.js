import React from "react";
import { Script } from "gatsby";

const TwitterWidget = () => {
  return (
    <>
      <a
        class="twitter-timeline"
        href="https://twitter.com/ISMIRConf?ref_src=twsrc%5Etfw"
        data-width="500"
        data-height="550"
      ></a>
      <Script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></Script>
    </>
  );
};
export default TwitterWidget;
