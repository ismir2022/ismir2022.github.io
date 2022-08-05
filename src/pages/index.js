import * as React from "react";
import TopNav from "../components/top-nav";
import { StaticImage } from "gatsby-plugin-image";
import MainContent from "../components/main-content";
import Highlights from "../components/highlights";
import Twitter from "../components/twitter";
import Dates from "../components/dates";

// markup
const IndexPage = () => {
  return (
    <div className="bg-[#E9ECEF]">
      <TopNav />
      {/* <div className="w-full px-20 my-5 z-0">
        <StaticImage src="../images/ismir_banner.png" alt="banner_img" />
      </div>
      <hr /> */}
      <div className="flex flex-col space-y-5 mx-20">
        <MainContent />
        <Highlights />
        <div className="flex flex-row place-content-evenly">
          <Dates/>
          <Twitter/>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
