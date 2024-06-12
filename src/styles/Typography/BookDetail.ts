import styled from 'styled-components';

const BookDetail = styled.h1`
  color: ${props => props.theme.typography.BookDetail.color};
  font-size: ${props => props.theme.typography.BookDetail.fontSize};
  font-weight: ${props => props.theme.typography.BookDetail.fontWeight};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    // 모바일 크기  
    font-size: 12px,
  }

  @media (min-width: ${props => props.theme.breakpoints.mobile}) and (max-width: ${props => props.theme.breakpoints.tablet}) {
    // 태블릿 크기  
    font-size: 14px;

  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) and (max-width: ${props => props.theme.breakpoints.desktop}) {
    // 작은 데스크탑 크기  
    font-size: 14px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 14px; // 기본 폰트 크기
  }

  @media (min-width: ${props => props.theme.breakpoints.largeDesktop}) {
    font-size: ${props => props.theme.typography.BookDetail.fontSize}; // 큰 데스크탑 크기
  }
`;

export default BookDetail;