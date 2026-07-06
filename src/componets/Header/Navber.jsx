import React from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router";
import { Computer } from "lucide-react";

const Navber = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "m-2 font-semibold border-b-2 border-[#9F62F2] text-[#9F62F2] pb-1"
              : "m-2 font-semibold hover:text-[#9F62F2] transition-colors"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive
              ? "m-2 font-semibold border-b-2 border-[#9F62F2] text-[#9F62F2] pb-1"
              : "m-2 font-semibold hover:text-[#9F62F2] transition-colors"
          }
        >
          Apps
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            isActive
              ? "m-2 font-semibold border-b-2 border-[#9F62F2] text-[#9F62F2] pb-1"
              : "m-2 font-semibold hover:text-[#9F62F2] transition-colors"
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100  mt-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2.5">
            <Link to="/">
              <img className="w-7 lg:w-10 " src={Logo} alt="" />
            </Link>
            <h1 className="text-xl lg:text-2xl font-bold text-[#9F62F2]">
              HERO.IO
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/sr-sourav-roy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline border-[#9F62F2] text-[#9F62F2] hover:bg-[#9F62F2] hover:text-white p-2"
          >
            <Computer />
            Contribute
          </a>
        </div>
      </div>
      <div className="divider lg:pl-0 w-[200] lg:w-full "></div>
    </div>
  );
};

export default Navber;
