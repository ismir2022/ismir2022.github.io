import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 pb-3 ">
      <div className="flex flex-row md:space-x-20 place-self-center space-x-5 place-items-evenly md:px-10 px-5 space-y-0 justify-center items-center">
        <div>
          <a href="https://www.iitb.ac.in/" target="_blank">
            <StaticImage
              src="../images/footer/iitb.png"
              alt="iitb"
              objectFit="contain"
              placeholder="blurred"
              width={70}
            />
          </a>
        </div>
        <div>
          <a href="https://www.iitm.ac.in/" target="_blank">
            <StaticImage
              src="../images/footer/iitm.png"
              alt="iitm"
              objectFit="contain"
              placeholder="blurred"
              width={70}
              height={70}
            />
          </a>
        </div>
        <div>
          <a href="https://iisc.ac.in/" target="_blank">
            <StaticImage
              src="../images/footer/iisc.png"
              alt="iisc"
              objectFit="contain"
              placeholder="blurred"
              width={70}
              height={70}
            />
          </a>
        </div>
        <div>
          <a href="https://indianmusicexperience.org/" target="_blank">
            <StaticImage
              src="../images/footer/ime.png"
              alt="ime"
              objectFit="contain"
              placeholder="blurred"
              width={70}
            />
          </a>
        </div>
        <div className="items-center justify-center">
          <a href="https://www.ismir.net/" target="_blank">
            <StaticImage
              src="../images/footer/ismir.png"
              alt="ismir"
              objectFit="contain"
              placeholder="blurred"
              width={70}
            />
          </a>
        </div>
      </div>
      <div className="flex flex-row space-x-5 md:space-x-20 justify-center">
        <a
          target="_blank"
          href="https://www.facebook.com/ISMIRConf"
          rel="noreferrer"
        >
          <FaFacebook style={{ color: "#d83616" }} size="30px" />
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/ismir_conference"
          rel="noreferrer"
        >
          <FaInstagram style={{ color: "#d83616" }} size="30px" />
        </a>

        <a
          target="_blank"
          href="https://twitter.com/ISMIRConf"
          rel="noreferrer"
        >
          <FaTwitter style={{ color: "#d83616" }} size="30px" />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/company/ismir-conference"
          rel="noreferrer"
        >
          <FaLinkedin style={{ color: "#d83616" }} size="30px" />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center px-5 break-word text-center">
        <p>© 2022 ISMIR 2022.</p>
        <p> All rights reserved.</p>
        <p>
          ISMIR 2022 logo designed by Mrinali Kamath and graphics designed by
          Vivek Vasudev
        </p>
      </div>
    </div>
  );
};

export default Footer;
