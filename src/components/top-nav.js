import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Link } from "gatsby";

const TopNav = () => {
  return (
    <div>
      <div class="navbar bg-[#E9ECEF] py-0">
        <div class="navbar-start text-[#d83616]">
          <div class="dropdown text-[#d83616]">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content mt-3 p-2 bg-white shadow-lg rounded-box w-72 "
            >
              <li
                tabindex="0"
                className="collapse collapse-arrow focus:text-black"
              >
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium ">Calls</div>
                <div class="collapse-content pr-0">
                  <ul class="bg-white text-[#ff7a7a]">
                    <li>
                      <Link to="/calls/cfp" className="active:bg-none text-xl">
                        Call for Papers
                      </Link>
                    </li>
                    <li>
                      <Link to="/calls/cft" className="active:bg-none text-xl">
                        Call for Tutorials
                      </Link>
                    </li>
                    <li>
                      <Link to="/calls/cfs" className="active:bg-none text-xl">
                        Call for Sponsorships
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/calls/cflbd"
                        className="active:bg-none text-xl"
                      >
                        Call for Late-Breaking Demo
                      </Link>
                    </li>
                    <li>
                      <Link to="/calls/cfm" className="active:bg-none text-xl">
                        Call for Music
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li tabindex="0" className="collapse collapse-arrow">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">Program</div>
                <div className="collapse-content">
                  <ul class="bg-white text-[#ff7a7a]">
                    <li>
                      <Link
                        to="/programs/keynotes"
                        className="active:bg-none text-xl"
                      >
                        Keynote Speakers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/programs/tutorials"
                        className="active:bg-none text-xl"
                      >
                        Tutorials
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/programs/satellites"
                        className="active:bg-none text-xl"
                      >
                        Satellite Events
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li tabindex="0" className="collapse collapse-arrow">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">Attend</div>
                <div className="collapse-content">
                  <ul class="bg-white text-[#ff7a7a]">
                    <li>
                      <Link
                        to="/attend/registration"
                        className="active:bg-none text-xl"
                      >
                        Registration
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/attend/support"
                        className="active:bg-none text-xl"
                      >
                        Financial Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/attend/venue"
                        className="active:bg-none text-xl"
                      >
                        Venue
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/attend/travel"
                        className="active:bg-none text-xl"
                      >
                        Travel
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/attend/explore"
                        className="active:bg-none text-xl"
                      >
                        Explore
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/codeofconduct"
                        className="active:bg-none text-xl"
                      >
                        Code of Conduct
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li tabindex="0" className="collapse">
                <Link
                  to="/sponsors"
                  className="text-xl collapse-title font-medium"
                >
                  Sponsors
                </Link>
              </li>
              <li tabindex="0" className="collapse collapse-arrow">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                  Diversity & Inclusion
                </div>
                <div className="collapse-content">
                  <ul class="bg-white text-[#ff7a7a]">
                    <li>
                      <Link
                        to="/diversity/mentoring"
                        className="active:bg-none text-xl"
                      >
                        New-to-ISMIR Mentoring
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/diversity/wimir"
                        className="active:bg-none text-xl"
                      >
                        WiMIR
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li tabindex="0" className="collapse collapse-arrow">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">About</div>
                <div className="collapse-content">
                  <ul class="bg-white text-[#ff7a7a]">
                    <li>
                      <Link to="/team" className="active:bg-none text-xl">
                        Organizing Team
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li tabindex="0" className="collapse">
                <Link
                  to="/contact"
                  className="text-xl collapse-title font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            class="btn btn-ghost h-fit items-center lg:ml-5 w-[190px] md:w-[230px]"
          >
            <StaticImage
              src="../images/ismir2022logo.png"
              alt="ismirlogo"
              objectFit="contain"
              placeholder="blurred"
            />
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex text-[#d83616]">
          <ul class="menu menu-horizontal p-0">
            <li tabindex="0 ">
              <a className="active:bg-[#d83616] text-2xl">
                Calls
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-white text-[#ff7a7a] shadow-lg z-10">
                <li>
                  <Link to="/calls/cfp" className="active:bg-[#d83616] text-xl">
                    Call for Papers
                  </Link>
                </li>
                <li>
                  <Link to="/calls/cft" className="active:bg-[#d83616] text-xl">
                    Call for Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/calls/cfs" className="active:bg-[#d83616] text-xl">
                    Call for Sponsorships
                  </Link>
                </li>
                <li>
                  <Link
                    to="/calls/cflbd"
                    className="active:bg-[#d83616] text-xl"
                  >
                    Call for Late-Breaking Demo
                  </Link>
                </li>
                <li>
                  <Link to="/calls/cfm" className="active:bg-[#d83616] text-xl">
                    Call for for Music
                  </Link>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a className="active:bg-[#d83616] text-2xl">
                Program
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-white text-[#ff7a7a] shadow-lg z-10">
                <li>
                  <Link
                    to="/programs/keynotes"
                    className="active:bg-[#d83616] text-xl"
                  >
                    Keynote Speakers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs/tutorials"
                    className="active:bg-[#d83616] text-xl"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs/satellites"
                    className="active:bg-[#d83616] text-xl"
                  >
                    Satellite Events
                  </Link>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a className="active:bg-[#d83616] text-2xl">
                Attend
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-white text-[#ff7a7a] shadow-lg z-10">
                <li>
                  <Link
                    to="/attend/registration"
                    className="active:bg-[#d83616] text-xl"
                  >
                    Registration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/attend/support"
                    className="active:bg-[#d83616] text-xl"
                  >
                    Financial Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/attend/venue"
                    className="active:bg-[#d83616] text-xl"
                  >
                    Venue
                  </Link>
                </li>
                <li>
                  <Link
                    to="/attend/travel"
                    className="active:bg-[#d83616] text-xl"
                  >
                    Travel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/attend/explore"
                    className="active:bg-[#d83616] text-xl"
                  >
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                    to="/codeofconduct"
                    className="active:bg-[#d83616] text-xl"
                  >
                    Code of Conduct
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/sponsors"
                className="text-2xl active:bg-[#d83616]  collapse-title"
              >
                Sponsors
              </Link>
            </li>
            <li tabindex="0">
              <a className="active:bg-[#d83616] text-2xl">
                Diversity & Inclusion
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-white text-[#ff7a7a] shadow-lg z-10">
                <li>
                  <Link
                    to="/diversity/mentoring"
                    className="active:bg-[#d83616] text-xl"
                  >
                    New-to-ISMIR Mentoring
                  </Link>
                </li>
                <li>
                  <Link
                    to="/diversity/wimir"
                    className="active:bg-[#d83616] text-xl"
                  >
                    WiMIR
                  </Link>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a className="active:bg-[#d83616] text-2xl">
                About
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-white text-[#ff7a7a] shadow-lg z-10">
                <li>
                  <Link to="/team" className="active:bg-[#d83616] text-xl">
                    Organizing Team
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" className="active:bg-[#d83616] text-2xl">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
