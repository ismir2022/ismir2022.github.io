import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Sponsors = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-[#d83616] font-bold md:text-4xl text-3xl mt-5">
        Sponsors
      </h1>
      <div className="space-y-20">
        <div className="text-center text-3xl font-bold space-y-5">
          <div className="bg-gradient-to-r from-transparent via-gray-400 p-3">
            <p>Platinum</p>
          </div>
          <div className="flex flex-row justify-center">
            <div className="flex flex-row flex-wrap lg:space-x-20 place-self-center space-x-5 place-items-evenly space-y-10 lg:space-y-0 justify-center items-center">
              <div>
                <a href="https://research.atspotify.com/" target="_blank">
                  <StaticImage
                    src="../images/sponsors/Spotify-logo.png"
                    alt="spotify"
                    objectFit="contain"
                    width={500}
                  />
                </a>
              </div>
              <div>
                <a href="https://moises.ai/" target="_blank">
                  <StaticImage
                    src="../images/sponsors/Moises_logo.png"
                    alt="spotify"
                    objectFit="contain"
                    width={500}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-3xl font-bold space-y-5">
          <div className="bg-gradient-to-r from-transparent via-amber-300 p-3">
            <p>Gold</p>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-row flex-wrap lg:space-x-20 place-self-center space-x-10 place-items-evenly space-y-10 lg:space-y-0 justify-center items-center">
              <div>
                <a href="https://indsca.web.app/about" target="_blank">
                  <StaticImage
                    src="../images/sponsors/IndSCA-logo.png"
                    alt="IndSCA-logo"
                    objectFit="contain"
                    width={200}
                  />
                </a>
              </div>
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
                <a href="https://deezer.com/" target="_blank">
                  <StaticImage
                    src="../images/sponsors/deezer_logo.png"
                    alt="spotify"
                    objectFit="contain"
                    width={200}
                  />
                </a>
              </div>
              <div>
                <a href="https://utopiamusic.com/" target="_blank">
                  <StaticImage
                    src="../images/sponsors/Utopia-Logo.png"
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
              <div>
                <a href="https://www.smule.com/" target="_blank">
                  <StaticImage
                    src="../images/sponsors/smule_logo.png"
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
            <p>Silver</p>
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
              <div>
                <a href="https://www.izotope.com/" target="_blank">
                  <StaticImage
                    src="../images/sponsors/Soundwide-logo.png"
                    alt="spotify"
                    objectFit="contain"
                    width={150}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap"></div>
        </div>
        <div className="text-center text-3xl font-bold space-y-5">
          <div className="bg-gradient-to-r from-transparent via-orange-400 p-3">
            <p>Supporter</p>
          </div>
          <div className="flex flex-row justify-center">
            <div className="flex flex-row flex-wrap lg:space-x-20 place-self-center space-x-10 place-items-evenly md:space-y-0 lg:space-y-0 justify-center items-center">
              <div>
                <a href="https://www.acrcloud.com/" target="_blank">
                  <StaticImage
                    src="../images/sponsors/ACRCloud-logo.png"
                    alt="spotify"
                    objectFit="contain"
                    width={100}
                  />
                </a>
              </div>
              <div>
                <a href="https://www.cochl.ai/" target="_blank">
                  <StaticImage
                    src="../images/sponsors/cochl_logo.png"
                    alt="spotify"
                    objectFit="contain"
                    width={100}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap"></div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
