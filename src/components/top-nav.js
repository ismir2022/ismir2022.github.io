import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import {Link} from 'gatsby'

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
              class="menu menu-compact dropdown-content mt-3 p-2 bg-white shadow-lg bg-white rounded-box w-52"
            >
              <li tabindex="0">
                <a class="justify-between active:bg-[#d83616]">
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
                <ul class="p-2 bg-white shadow-lg">
                  <li>
                    <a className="active:bg-[#d83616]">Call for Papers</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616]">Call for Tutorials</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616]">Call for Sponsorships</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616]">Call for Late-Breaking Demo</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616]">Call for Music</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a class="justify-between active:bg-[#d83616]">
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
                <ul class="p-2 bg-white shadow-lg">
                  <li>
                    <Link to="/programs/keynotes" className="active:bg-[#d83616]">Keynote Speakers</Link>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616]">Tutorials</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616]">Satellite Events</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a class="justify-between active:bg-[#d83616]">
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
                <ul class="p-2 bg-white shadow-lg">
                  <li>
                    <a className="active:bg-[#d83616]">Registration</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616]">Financial Support</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616]">Venue</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616]">Travel</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616]">Explore</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616]">Code of Conduct</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="active:bg-[#d83616]">Sponsors</a>
              </li>
              <li tabindex="0">
                <a class="justify-between active:bg-[#d83616]">
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
                <ul class="p-2 bg-white shadow-lg">
                  <li>
                    <a className="active:bg-[#d83616]">New-to-ISMIR Mentoring</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616]">WiMIR</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a class="justify-between active:bg-[#d83616]">
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
                <ul class="p-2 bg-white shadow-lg">
                  <li>
                    <a className="active:bg-[#d83616]">Organizing Team</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="active:bg-[#d83616]">Contact</a>
              </li>
            </ul>
          </div>
          <Link to="/"  class="btn btn-ghost h-max items-center lg:ml-5">
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
              <a className="active:bg-[#d83616]">
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
                  <a className="active:bg-[#d83616]">Call for Papers</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616]">Call for Tutorials</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616]">Call for Sponsorships</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616]">Call for Late-Breaking Demo</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616]">Call for Music</a>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a className="active:bg-[#d83616]">
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
                <li >
                  <Link to="/programs/keynotes" className="active:bg-[#d83616]">Keynote Speakers</Link>
                  
                </li>
                <li>
                  <a className="active:bg-[#d83616]">Tutorials</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616]">Satellite Events</a>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a className="active:bg-[#d83616]">
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
                  <a className="active:bg-[#d83616]">Registration</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616]">Financial Support</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616]">Venue</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616]">Travel</a>
                </li>
                <li>
                  <a>Explore</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616]">Code of Conduct</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="active:bg-[#d83616]">Sponsors</a>
            </li>
            <li tabindex="0">
              <a className="active:bg-[#d83616]">
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
                  <a className="active:bg-[#d83616]">New-to-ISMIR Mentoring</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616]">WiMIR</a>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a className="active:bg-[#d83616]">
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
                  <a className="active:bg-[#d83616]">Organizing Team</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616]">Contact</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="active:bg-[#d83616]">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
