import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "font-bold" : `${className} font-medium`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
