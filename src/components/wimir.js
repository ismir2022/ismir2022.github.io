import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Wimir = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-4xl text-3xl mt-5">
          WiMIR
        </h1>
      </div>
      <div className="space-y-3">
        <p className="text-xl">
          The following are the various Diversity & Inclusion (D&I) initiatives
          of ISMIR 2022:
        </p>
        <ul className="text-xl list-disc list-inside">
          <li>New-to-ISMIR paper mentoring program</li>
          <li>WiMIR keynote</li>
          <li>WiMIR plenary session (TBA)</li>
          <li>WiMIR workshops (TBA)</li>
          <li>D&I waivers & grants (TBA)</li>
        </ul>
        <p className="text-xl">
          We thank our 2022 sponsors for their generous and vital continuation
          of support of these important initiatives. These sponsorships will
          make possible the financial support to ISMIR attendees, including
          grants to cover registration fees, paper publication fees, etc.
        </p>
        <div>
          <h1 className="text-[#d83616] font-bold md:text-4xl text-3xl mt-5">
            Sponsors
          </h1>
        </div>
        <div className="space-y-20">
          <div className="text-center text-3xl font-bold space-y-5">
            <div className="bg-gradient-to-r from-transparent via-gray-400 p-3">
              <p>Patron</p>
            </div>
            <div className="flex flex-row justify-center">
              <div className="flex flex-row flex-wrap lg:space-x-20 place-self-center space-x-5 place-items-evenly md:space-y-0 lg:space-y-0  items-center">
                <div>
                  <a href="https://research.atspotify.com/" target="_blank">
                    <StaticImage
                      src="../images/sponsors/Spotify-logo.png"
                      alt="spotify"
                      objectFit="contain"
                      width={400}
                    />
                  </a>
                </div>
                <div>
                  <a href="https://deezer.com/" target="_blank">
                    <StaticImage
                      src="../images/sponsors/deezer_logo.png"
                      alt="spotify"
                      objectFit="contain"
                      width={400}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-3xl font-bold space-y-5">
            <div className="bg-gradient-to-r from-transparent via-amber-300 p-3">
              <p>Contributor</p>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-row flex-wrap lg:space-x-20 place-self-center space-x-10 place-items-evenly space-y-10 lg:space-y-0 justify-center items-center">
                <div>
                  <a href="https://www.adobe.com/" target="_blank">
                    <StaticImage
                      src="../images/sponsors/Adobe-logo.png"
                      alt="spotify"
                      objectFit="contain"
                      width={200}
                    />
                  </a>
                </div>

                <div>
                  <a href="https://www.izotope.com/" target="_blank">
                    <StaticImage
                      src="../images/sponsors/Soundwide-logo.png"
                      alt="spotify"
                      objectFit="contain"
                      width={200}
                    />
                  </a>
                </div>
                <div>
                  <a href="https://www.siriusxm.com/pandora" target="_blank">
                    <StaticImage
                      src="../images/sponsors/SiriusPandora_logo.png"
                      alt="spotify"
                      objectFit="contain"
                      width={200}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap"></div>
          </div>
          <div className="text-center text-3xl font-bold space-y-5">
            <div className="bg-gradient-to-r from-transparent via-gray-300 p-3">
              <p>Supporter</p>
            </div>
            <div className="flex flex-row justify-center">
              <div className="flex flex-row flex-wrap lg:space-x-20 place-self-center space-x-10 place-items-evenly md:space-y-0 lg:space-y-0 justify-center items-center">
                <div>
                  <a href="https://www.steinberg.net/" target="_blank">
                    <StaticImage
                      src="../images/sponsors/Steinberg-logo.png"
                      alt="spotify"
                      objectFit="contain"
                      width={150}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wimir;
