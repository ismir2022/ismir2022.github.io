import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import {Link} from 'gatsby'

const TopNav = () => {
  return (
    <div>
      <div class="navbar bg-[#E9ECEF]">
        <div class="navbar-start">
          <div class="dropdown">
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
              class="menu menu-compact dropdown-content mt-3 p-2 bg-white shadow bg-white rounded-box w-52"
            >
              <li tabindex="0">
                <a class="justify-between">
                  Calls
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2 bg-white">
                  <li>
                    <a>Call for Papers</a>
                  </li>
                  <li>
                    <a>Call for Tutorials</a>
                  </li>
                  <li>
                    <a>Call for Sponsorships</a>
                  </li>
                  <li>
                    <a>Call for Late-Breaking Demo</a>
                  </li>
                  <li>
                    <a>Call for Music</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Program
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2 bg-white">
                  <li>
                    <Link to="/keynote/">Keynote Speakers</Link>
                  </li>
                  <li>
                    <a>Tutorials</a>
                  </li>
                  <li>
                    <a>Satellite Events</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Attend
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2 bg-white">
                  <li>
                    <a>Registration</a>
                  </li>
                  <li>
                    <a>Financial Support</a>
                  </li>
                  <li>
                    <a>Venue</a>
                  </li>
                  <li>
                    <a>Travel</a>
                  </li>
                  <li>
                    <a>Explore</a>
                  </li>
                  <li>
                    <a>Code of Conduct</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Sponsors</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Diversity & Inclusion
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2 bg-white">
                  <li>
                    <a>New-to-ISMIR Mentoring</a>
                  </li>
                  <li>
                    <a>WiMIR</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  About
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2 bg-white">
                  <li>
                    <a>Organizing Team</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">
            <StaticImage
              src="../images/ismir2022logo.png"
              alt="ismirlogo"
              objectFit="contain"
              width={120}
              height={40}
            />
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li tabindex="0">
              <a>
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
              <ul class="p-2 bg-white ">
                <li>
                  <a>Call for Papers</a>
                </li>
                <li>
                  <a>Call for Tutorials</a>
                </li>
                <li>
                  <a>Call for Sponsorships</a>
                </li>
                <li>
                  <a>Call for Late-Breaking Demo</a>
                </li>
                <li>
                  <a>Call for Music</a>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a>
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
              <ul class="p-2 bg-white">
                <li>
                  <Link to="/keynote/">Keynote Speakers</Link>
                  
                </li>
                <li>
                  <a>Tutorials</a>
                </li>
                <li>
                  <a>Satellite Events</a>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a>
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
              <ul class="p-2 bg-white z-1">
                <li>
                  <a>Registration</a>
                </li>
                <li>
                  <a>Financial Support</a>
                </li>
                <li>
                  <a>Venue</a>
                </li>
                <li>
                  <a>Travel</a>
                </li>
                <li>
                  <a>Explore</a>
                </li>
                <li>
                  <a>Code of Conduct</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Sponsors</a>
            </li>
            <li tabindex="0">
              <a>
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
              <ul class="p-2 bg-white">
                <li>
                  <a>New-to-ISMIR Mentoring</a>
                </li>
                <li>
                  <a>WiMIR</a>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a>
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
              <ul class="p-2 bg-white">
                <li>
                  <a>Organizing Team</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <a className="w-40 h-20">
        <StaticImage src="../images/ismir2022logo.png" alt="ismirlogo"/>
      </a>
      <div><button>Calls</button></div>
      <div><button>Program</button></div>
      <div><button>Attend</button></div>
      <div><button>Sponsors</button></div>
      <div><button>Diversity & Inclusion</button></div>
      <div><button>About</button></div>
      <div><button>Contact</button></div> */}
    </div>
  );
};

export default TopNav;
