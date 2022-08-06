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
              class="menu menu-compact dropdown-content mt-3 p-2 bg-white shadow-lg bg-white rounded-box w-72 "
            >
              <li tabindex="0">
                <a class="justify-between active:bg-[#d83616] text-xl">
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
                    <a className="active:bg-[#d83616] text-xl">Call for Papers</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616] text-xl">Call for Tutorials</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616] text-xl">Call for Sponsorships</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616] text-xl">Call for Late-Breaking Demo</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616] text-xl">Call for Music</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a class="justify-between active:bg-[#d83616] text-xl">
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
                    <Link to="/programs/keynotes" className="active:bg-[#d83616] text-xl">Keynote Speakers</Link>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616] text-xl">Tutorials</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616] text-xl">Satellite Events</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a class="justify-between active:bg-[#d83616] text-xl">
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
                    <a className="active:bg-[#d83616] text-xl">Registration</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616] text-xl">Financial Support</a>
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
                    <a className="active:bg-[#d83616] text-xl">Code of Conduct</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="active:bg-[#d83616] text-xl">Sponsors</a>
              </li>
              <li tabindex="0">
                <a class="justify-between active:bg-[#d83616] text-xl">
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
                    <a className="active:bg-[#d83616] text-xl">New-to-ISMIR Mentoring</a>
                  </li>
                  <li>
                    <a className="active:bg-[#d83616] text-xl">WiMIR</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a class="justify-between active:bg-[#d83616] text-xl">
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
                <ul class="p-2 bg-white shadow-lg text-xl">
                  <li>
                    <a className="active:bg-[#d83616] text-xl">Organizing Team</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="active:bg-[#d83616] text-xl">Contact</a>
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
                  <a className="active:bg-[#d83616] text-2xl">Call for Papers</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Call for Tutorials</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Call for Sponsorships</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Call for Late-Breaking Demo</a>
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
                <li >
                  <Link to="/programs/keynotes" className="active:bg-[#d83616] text-2xl">Keynote Speakers</Link>
                  
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Tutorials</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Satellite Events</a>
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
                  <a className="active:bg-[#d83616] text-2xl">Financial Support</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Venue</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Travel</a>
                </li>
                <li>
                  <a>Explore</a>
                </li>
                <li>
                  <a className="active:bg-[#d83616] text-2xl">Code of Conduct</a>
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
                  <a className="active:bg-[#d83616] text-2xl">New-to-ISMIR Mentoring</a>
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
                  <a className="active:bg-[#d83616] text-2xl">Organizing Team</a>
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
