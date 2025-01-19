import styled from "styled-components";
import createGlobalStyle from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #302c2c #b2aeae;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 7px;
  }

  *::-webkit-scrollbar-track {
    background: #454545;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ad09092c;
    border-radius: 20px;
    border: 0px solid #000000;
  }
`;
export const Main = styled.main`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;
