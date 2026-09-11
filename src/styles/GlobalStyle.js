import { createGlobalStyle } from "styled-components";
import Pretendard from "../assets/fonts/PretendardVariable.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src: url(${Pretendard}) format("woff2");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: "Pretendard", sans-serif;
    color: ${({ theme }) => theme.colors.gray900};
  }
`;

export default GlobalStyle;