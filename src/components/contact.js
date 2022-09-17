import React from "react";
import Link from "gatsby";

const Contact = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
          Contact Us
        </h1>
      </div>
      <div>
        <ul className="list-disc text-lg list-inside">
          <li>
            General inquiries:{" "}
            <span className="text-[#d83616]">
              <a href="mailto:ismir2022@ismir.net" target="_blank">
                ismir2022@ismir.net
              </a>
            </span>
          </li>
          <li>
            Scientific program:{" "}
            <span className="text-[#d83616]">
              <a href="mailto:ismir2022-papers@ismir.net" target="_blank">
                ismir2022-papers@ismir.net
              </a>
            </span>{" "}
          </li>
          <li>
            Tutorials:{" "}
            <span className="text-[#d83616]">
              <a href="mailto:ismir2022-tutorials@ismir.net" target="_blank">
                ismir2022-tutorials@ismir.net
              </a>
            </span>
          </li>
          <li>
            Music program:{" "}
            <span className="text-[#d83616]">
              <a href="mailto:ismir2022-music@ismir.net" target="_blank">
                ismir2022-music@ismir.net
              </a>
            </span>
          </li>
          <li>
            Diversity, Inclusion, Grants and Financial Support:{" "}
            <span className="text-[#d83616]">
              <a href="ismir2022-diversity@ismir.net" target="_blank">
                ismir2022-diversity@ismir.net
              </a>
            </span>
          </li>
          <li>
            Registration/Travel/Visa related queries:{" "}
            <span className="text-[#d83616]">
              <a href="mailto:ismir2022-registration@ismir.net" target="_blank">
                ismir2022-registration@ismir.net
              </a>
            </span>{" "}
          </li>
          <li>
            Virtual Platform/Technical Support with Video/Poster:{" "}
            <span className="text-[#d83616]">
              <a href="mailto:ismir2022-tech@ismir.net" target="_blank">
                ismir2022-tech@ismir.net
              </a>
            </span>{" "}
          </li>
          <li>
            Late breaking/Demo related queries:{" "}
            <span className="text-[#d83616]">
              <a href="mailto:ismir2022-lbd@ismir.net" target="_blank">
                ismir2022-lbd@ismir.net
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
