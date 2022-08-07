import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Link } from "gatsby";

const TopNav = () => {
  return (
    <div>
      <div class="navbar bg-[#E9ECEF]">
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
              class="dropdown-content mt-3 p-2 bg-white shadow-lg bg-white rounded-box w-72 "
            >
              <li tabindex="0" className="collapse collapse-arrow">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">Calls</div>
                <div class="collapse-content pr-0">
                  <ul class="bg-white ">
                    <li>
                      <a className="active:bg-none  text-xl">
                        Call for Papers
                      </a>
                    </li>
                    <li>
                      <a className="active:bg-none  text-xl">
                        Call for Tutorials
                      </a>
                    </li>
                    <li>
                      <a className="active:bg-none  text-xl">
                        Call for Sponsorships
                      </a>
                    </li>
                    <li>
                      <a className="active:bg-none  text-xl">
                        Call for Late-Breaking Demo
                      </a>
                    </li>
                    <li>
                      <a className="active:bg-none  text-xl">
                        Call for Music
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li tabindex="0" className="collapse collapse-arrow">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">Program</div>
                <div className="collapse-content">
                  <ul class="bg-white">
                    <li>
                      <Link
                        to="/programs/keynotes"
                        className="active:bg-none text-xl"
                      >
                        Keynote Speakers
                      </Link>
                    </li>
                    <li>
                      <a className="active:bg-none text-xl">Tutorials</a>
                    </li>
                    <li>
                      <a className="active:bg-none text-xl">
                        Satellite Events
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li tabindex="0" className="collapse collapse-arrow">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">Attend</div>
                <div className="collapse-content">
                  <ul class="bg-white">
                    <li>
                      <a className="active:bg-[#d83616] text-xl">
                        Registration
                      </a>
                    </li>
                    <li>
                      <a className="active:bg-[#d83616] text-xl">
                        Financial Support
                      </a>
                    </li>
                    <li>
                      <a className="active:bg-[#d83616] text-xl">Venue</a>
                    </li>
                    <li>
                      <a className="active:bg-[#d83616] text-xl">Travel</a>
                    </li>
                    <li>
                      <a className="active:bg-[#d83616] text-xl">Explore</a>
                    </li>
                    <li>
                      <a className="active:bg-[#d83616] text-xl">
                        Code of Conduct
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li tabindex="0" className="collapse">
                <a className=" text-xl collapse-title font-medium">Sponsors</a>
              </li>
              <li tabindex="0" className="collapse collapse-arrow">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                  Diversity & Inclusion
                </div>
                <div className="collapse-content">
                  <ul class="bg-white">
                    <li>
                      <a className="active:bg-none text-xl">
                        New-to-ISMIR Mentoring
                      </a>
                    </li>
                    <li>
                      <a className="active:bg-none text-xl">WiMIR</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li tabindex="0" className="collapse collapse-arrow">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">About</div>
                <div className="collapse-content">
                  <ul class="bg-white">
                    <li>
                      <a className="active:bg-none text-xl">
                        Organizing Team
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li tabindex="0" className="collapse">
                <a className="text-xl collapse-title font-medium">Contact</a>
              </li>
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost h-max items-center lg:ml-5">
            <StaticImage
              src="../images/ismir2022logo.png"
              alt="ismirlogo"
              objectFit="contain"
              width={120}
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
              <ul class="p-2 bg-white shadow-lg z-10">
                <li>
                  <a className="active:bg-[#d83616] text-2xl">
                    Call for Papers
                  </a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">
                    Call for Tutorials
                  </a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">
                    Call for Sponsorships
                  </a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">
                    Call for Late-Breaking Demo
                  </a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Call for Music</a>
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
              <ul class="p-2 bg-white shadow-lg z-10">
                <li>
                  <Link
                    to="/programs/keynotes"
                    className="active:bg-[#d83616] text-2xl"
                  >
                    Keynote Speakers
                  </Link>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Tutorials</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">
                    Satellite Events
                  </a>
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
              <ul class="p-2 bg-white shadow-lg z-10">
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Registration</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">
                    Financial Support
                  </a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Venue</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Travel</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Explore</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">
                    Code of Conduct
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="active:bg-[#d83616] text-2xl">Sponsors</a>
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
              <ul class="p-2 bg-white shadow-lg z-10">
                <li>
                  <a className="active:bg-[#d83616] text-2xl">
                    New-to-ISMIR Mentoring
                  </a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">WiMIR</a>
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
              <ul class="p-2 bg-white shadow-lg z-10">
                <li>
                  <a className="active:bg-[#d83616] text-2xl">
                    Organizing Team
                  </a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Contact</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="active:bg-[#d83616] text-2xl">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
