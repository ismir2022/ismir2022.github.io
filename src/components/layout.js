import React from "react";
import TopNav from "./top-nav";
import Footer from "./footer";
import { StaticImage } from "gatsby-plugin-image";

export default function Layout({ children }) {
  return (
    <div className="bg-[#E9ECEF] space-y-10 text-black ">
      <TopNav />
      <div className="w-full ">
        <StaticImage src="../images/ismir_banner.png" alt="banner_img" />
      </div>
      {children}
      <Footer/>
    </div>
  );
}
