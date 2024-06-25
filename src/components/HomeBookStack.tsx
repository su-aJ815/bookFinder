import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from '../styles/theme';
import bookStack from "../assets/img/bookStack.png";
import LogoWhite from "../assets/img/logoWhite.png";
import Paragraph5 from "../styles/Typography/Paragraph5";
import '../styles/homebookstack.scss'

function HomeBookStack() {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ backgroundColor: "#f3eee1" }} className="containerA w-full h-auto pt-24 pb-24 flex">
                <img
                    className="stack-img"
                    src={bookStack}
                    alt=""
                />
                <div
                    className="text-box flex">
                    <div
                        className="rounded-l-full mt-12"
                        style={{
                            width: "100%",
                            height: "84px",
                            backgroundColor: "#11100B",
                            paddingTop: "18px",
                            paddingLeft: "80px",
                        }}
                    >
                        <img
                            style={{
                                width: "230px",
                                height: "48px",
                            }}
                            src={LogoWhite}
                            alt=""
                        />
                    </div>
                    <div className="saying">
                        <Paragraph5>
                            “책은 우리가 탐험하지 않은 세계로 우리를 안내하는 지침서이다.
                            그것은 우리의 말을 초월하여 우리의 마음을 확장하며, 우리의 경험을
                            더 풍부하게 만들어 준다. 책은 우리를 과거와 미래, 심지어 다른
                            세계로도 안내해준다. 따라서 책을 통해 여행하는 것은 언제나 우리의
                            영혼을 풍요롭게 만든다.” - 에드워드 더스터튼
                        </Paragraph5>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default HomeBookStack;