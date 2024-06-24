import styled from 'styled-components';

const MainParagraph = styled.p`
  color: ${props => props.theme.typography.MainParagraph.color};
  font-size: ${props => props.theme.typography.MainParagraph.fontSize};
  font-weight: ${props => props.theme.typography.MainParagraph.fontWeight};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    /* 모바일 크기 */
    font-size: 12px;
    color: #fafafa;
  }

  @media (min-width: ${props => props.theme.breakpoints.mobile}) and (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 13px;
    color: #fafafa;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) and (max-width: ${props => props.theme.breakpoints.desktop}) {
    /* 태블릿 크기 */
    font-size: 13px;
    color: #fafafa;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    /* 작은 데스크탑 크기 */
    font-size: 15px;
  }

  @media (min-width: ${props => props.theme.breakpoints.largeDesktop}) {
    /* 큰 데스크탑 크기 */
    font-size: ${props => props.theme.typography.MainParagraph.fontSize};
  }
`;

export default MainParagraph;