import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../styles/theme";
import '../styles/header.scss';

function Header() {
  return (
    <div className="positioner">
      <div className="menu-tab">
        <Link
          className="mt-auto mb-auto no-underline"
          style={{ color: theme.colors.mainColor }}
          to="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default Header;
