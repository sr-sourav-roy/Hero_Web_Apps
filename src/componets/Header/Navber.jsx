import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router";
import { Computer } from "lucide-react";

const Navber = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2 font-semibold">Home</li>
      </Link>
      <Link to="/apps">
        <li className="m-2 font-semibold">Apps</li>
      </Link>
      <Link to="/installation">
        <li className="m-2 font-semibold">Installation</li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100  mt-1 mb-10">
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
          <img className="w-10 " src={Logo} alt="" />
          <h1 className="text-2xl font-bold text-[#9F62F2]">HERO.IO</h1>
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
          className="btn btn-outline border-[#9F62F2] text-[#9F62F2] hover:bg-[#9F62F2] hover:text-white "
        >
          <Computer />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navber;
