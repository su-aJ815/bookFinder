import React from "react";
import { theme } from "../styles/theme";
import styled from "styled-components";

const Title1 = styled.h1`
  color: ${theme.typography.title1.color};
  font-size: ${theme.typography.title1.fontSize};
  font-weight: ${theme.typography.title1.fontWeight};
`;

function Home() {
  return <Title1>세상에 이런 폰트가 나오다니 천재인듯</Title1>;
}

export default Home;
