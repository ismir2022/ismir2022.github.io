import React from "react";
import TopNav from "./top-nav";
import Footer from "./footer";
import { StaticImage } from "gatsby-plugin-image";

export default function Layout({ children }) {
  return (
    <div className="bg-[#E9ECEF] text-black ">
      <TopNav />
      <div className="active:none flex flex-col md:mx-30 lg:mx-52 mx-5 text-center ">
        <StaticImage
          src="../images/ismir_banner.png"
          alt="banner_img"
          placeholder="blurred"
        />
      </div>
      {children}
      <Footer />
    </div>
  );
}
