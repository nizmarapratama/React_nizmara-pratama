import React from "react";
import logoImage from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="navbar bg-transparent">
      <div className="flex-1">
        <img src={logoImage} alt="logo" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Produk</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};