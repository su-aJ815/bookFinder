/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { theme } from "../styles/theme";
import { ThemeProvider } from 'styled-components';
import '../styles/home.scss';
import CarouselBox from "../components/CarouselBox";
import AuthorBook from "../components/AuthorBook";
import HomeMain from "../components/HomeMain";
import HomeFeature from "../components/HomeFeature";
import HomeBookStack from "../components/HomeBookStack";
import backgroundBox from "../assets/img/backgroundBox.png";
import Heading2 from "../styles/Typography/Heading2";
import Heading4 from "../styles/Typography/Heading4";
// interface HoomProps extends React.HTMLAttributes<HTMLInputElement> {
// }

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <HomeMain />
      <HomeFeature />
      <div className="w-full h-auto flex flex-row mt-24 mb-9">
        <div className="margin-left-box w-10 h-20 bg-zinc-900 mr-5 rounded-l-full" />
        <div>
          <Heading4>키워드별 인기 저서</Heading4>
          <Heading2>'자바스크립트' 관련 책을 찾고계신가요?</Heading2>
        </div>
      </div>
      <div className="w-auto h-auto flex flex-row margin-x-box">
        <CarouselBox />
      </div>
      <HomeBookStack />
      <div className="w-full h-auto pt-24 pb-24 text-center relative">
        <AuthorBook />
        <img
          src={backgroundBox}
          alt=""
          className="hide-item rounded-l-lg w-2/5"
          style={{
            height: "350px",
            zIndex: "-1",
            position: "absolute",
            bottom: "0",
            right: "0",
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default Home;
