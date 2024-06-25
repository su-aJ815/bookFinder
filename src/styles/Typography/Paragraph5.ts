import styled from 'styled-components';

const Paragraph5 = styled.h1`
  color: ${props => props.theme.typography.Paragraph5.color};
  font-size: ${props => props.theme.typography.Paragraph5.fontSize};
  font-weight: ${props => props.theme.typography.Paragraph5.fontWeight};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    // 모바일 크기  
    font-size: "11px",
  }

  @media (min-width: ${props => props.theme.breakpoints.mobile}) and (max-width: ${props => props.theme.breakpoints.tablet}) {
    // 태블릿 크기  
    font-size: 11px;

  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) and (max-width: ${props => props.theme.breakpoints.desktop}) {
    // 작은 데스크탑 크기  
    font-size: 14px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 14px; // 기본 폰트 크기
  }

  @media (min-width: ${props => props.theme.breakpoints.largeDesktop}) {
    font-size: ${props => props.theme.typography.Paragraph5.fontSize}; // 큰 데스크탑 크기
  }
`;

export default Paragraph5;