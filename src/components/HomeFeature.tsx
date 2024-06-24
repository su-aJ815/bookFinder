import React from "react";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import Heading3 from "../styles/Typography/Heading3";
import Paragraph2 from "../styles/Typography/Paragraph2";
import '../styles/homefeature.scss';

const Features = [
    { title: '다양한 옵션을 활용해보세요', contents: '제목, 저자, 출판사, 출간 연도 등 다양한 옵션을 만나보세요.', icon: faGlobe },
    { title: '상세한 책 정보를 만나보세요', contents: '상세한 정보로 책의 내용과 품질을 더욱 신중하게 평가해보세요.', icon: faChartSimple },
    { title: '마음에 드는 책을 저장하세요', contents: '나만의 책 리스트를 만들어 효율적이고 쉽게 접근해보세요.', icon: faBookmark },
    { title: '인기 작가의 책을 만나보세요', contents: '선별된 작가의 작품을 메인 페이지에서 만나보세요.', icon: faPenFancy }
];

function HomeFeature() {
    return (
        <ThemeProvider theme={theme}>
            <div className="feature-box-container w-full flex flex-row justify-between border-y border-zinc-900">
                {Features.map((feature, index) => (
                    <div className="feature-box" key={index}>
                        <FontAwesomeIcon
                            className="icon"
                            icon={feature.icon}
                            size="xl"
                        />
                        <Heading3 className="mb-1">{feature.title}</Heading3>
                        <Paragraph2 className="hide-sth">
                            {feature.contents}
                        </Paragraph2>
                    </div>
                ))}
            </div>
        </ThemeProvider>
    )
}

export default HomeFeature;