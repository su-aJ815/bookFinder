import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.scss';

function Header() {
  return (
    <div className="positioner">
      <div className="menu-tab">
        <Link
          className="mt-auto mb-auto no-underline"
          to="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default Header;
