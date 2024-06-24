import styled from 'styled-components';

const Heading2 = styled.h1`
  color: ${props => props.theme.typography.Heading2.color};
  font-size: ${props => props.theme.typography.Heading2.fontSize};
  font-weight: ${props => props.theme.typography.Heading2.fontWeight};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    /* 모바일 크기 */
    font-size: 28px;
    font-weight: 700;
  }

  @media (min-width: ${props => props.theme.breakpoints.mobile}) and (max-width: ${props => props.theme.breakpoints.tablet}) {
    /* 작은 디바이스 크기 */
    font-size: 28px;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) and (max-width: ${props => props.theme.breakpoints.desktop}) {
    /* 태블릿 크기 */
    font-size: 28px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    /* 작은 데스크탑 크기 */
    font-size: 36px;
  }

  @media (min-width: ${props => props.theme.breakpoints.largeDesktop}) {
    /* 큰 데스크탑 크기 */
    color: ${props => props.theme.typography.Heading2.color};
    font-size: ${props => props.theme.typography.Heading2.fontSize};
    font-weight: ${props => props.theme.typography.Heading2.fontWeight};
  }
`;

export default Heading2;
