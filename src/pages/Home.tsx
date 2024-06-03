import React from "react";
import { theme } from "../styles/theme";
import styled from "styled-components";

const Heading1 = styled.h1`
  color: ${theme.typography.Heading1.color};
  font-size: ${theme.typography.Heading1.fontSize};
  font-weight: ${theme.typography.Heading1.fontWeight};
`;

function Home() {
  return <Heading1>세상에 이런 폰트가 나오다니 천재인듯</Heading1>;
}

export default Home;
