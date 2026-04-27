import React from "react";

import { Link } from "react-router-dom";
import MyLink from "./MyLink";
import ExploreArtworks from "./../pages/ExploreArtworks";
import AddArtwork from "./../pages/AddArtwork";
import MyGallery from "./../pages/MyGallery";
import MyFavorites from "./../pages/MyFavorites";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* LEFT */}
      <div className="navbar-start">
        {/* MOBILE MENU */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            onClick={(e) => {
              if (e.target.closest("a")) {
                document.activeElement.blur();
              }
            }}  
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
          >
            <li>
              <MyLink to={"/"}>Home</MyLink>
            </li>
            <li>
              <MyLink to={"/explore"}>Explore</MyLink>
            </li>
            <li>
              <MyLink to={"/add-artwork"}>AddArt</MyLink>
            </li>
            <li>
              <MyLink to={"/my-gallery"}>Gallery</MyLink>
            </li>
            <li>
              <MyLink to={"/my-favorites"}>Favorites</MyLink>
            </li>
          </ul>
        </div>

        {/* LOGO */}
        <Link
          to="/"
          className="btn btn-ghost lg:text-xl flex flex-col items-center gap-0 lg:flex-row lg:gap-2"
        >
          <img
            src="/logo.svg"
            alt="ARTIFY"
            className="w-18 h-8 lg:w-[94px] lg:h-[46px]"
          />
          <span className="text-[#141414] italic">ART GALLERY</span>
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex italic">
        <ul className="menu menu-horizontal px-1">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/explore"}>Explore</MyLink>
          </li>
          <li>
            <MyLink to={"/add-artwork"}>AddArt</MyLink>
          </li>
          <li>
            <MyLink to={"/my-gallery"}>Gallery</MyLink>
          </li>
          <li>
            <MyLink to={"/my-favorites"}>Favorites</MyLink>
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        <Link to="/login" className="btn ml-5 mr-5">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
