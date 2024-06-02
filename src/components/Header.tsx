import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../styles/theme";

const Positioner = styled.div`
  height: 56px;
  width: 100vw;
  background-color: transparent;
  // position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const MenuTab = styled.div`
  height: 56px;
  width: auto;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  gap: 20px;
  text-align: center;
`;

function Header() {
  return (
    <Positioner>
      <MenuTab>
        <Link
          className="mt-auto mb-auto no-underline"
          style={{ color: theme.colors.mainColor }}
          to="/"
        >
          Home
        </Link>
        <Link
          className="mt-auto mb-auto no-underline"
          style={{ color: theme.colors.mainColor }}
          to="/search"
        >
          SearchPage
        </Link>
      </MenuTab>
    </Positioner>
  );
}

export default Header;
