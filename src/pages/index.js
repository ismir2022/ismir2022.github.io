import * as React from "react";
import TopNav from "../components/top-nav";
import { StaticImage } from "gatsby-plugin-image";
import MainContent from "../components/main-content";

// markup
const IndexPage = () => {
  return (
    <>
      {/* <div className="text-3xl font-bold underline">
      This is a test
    </div> */}
      <TopNav />
      <hr />
      <div className="w-full px-20 my-5">
        <StaticImage src="../images/ismir_banner.png" alt="banner_img" />
      </div>
      <hr />
      <MainContent />
    </>
  );
};

export default IndexPage;
