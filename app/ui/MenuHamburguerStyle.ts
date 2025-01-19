import styled from "styled-components";

export const Container = styled.nav`
  header {
    height: 6rem;
    display: flex;
    align-items: center;
    font-family: pythia, sans-serif;
    justify-content: space-around;
    background: rgb(40, 23, 83);
    position: fixed;
    top: 0;
    // width: 100vw;
    width: calc(100vw - 12px);
    padding: 0.7rem 1.25rem;
    box-shadow: 0px 3px 10px rgb(16, 15, 15, 0.953);
    transition: 0.7s;
    z-index: 20;
  }

  .style {
    position: absolute;
    /* background-color: rgb(191, 28, 28, 75%); */
    background-image: linear-gradient(
      45deg,
      rgb(191, 28, 28, 75%),
      rgb(204, 110, 110, 75%)
    );
    border-radius: 50%;
    border: 2px solid rgb(204, 110, 110, 75%);
    width: 100px;
    height: 100px;
    top: 0.5rem;
  }

  .logo {
    display: flex;
    justify-content: center;
    font-size: 3.5rem;
    cursor: pointer;
    min-height: 40px;
  }

  .logo a {
    position: relative;
    text-decoration: none;
    letter-spacing: 14px;
    color: rgb(240, 248, 255);
    text-shadow: -3px -3px 0px rgb(16, 15, 15, 0.953),
      -3px 3px 0px rgb(16, 15, 15, 0.953), 3px -3px 0px rgb(16, 15, 15, 0.953),
      3px 0px 0px rgb(16, 15, 15, 0.953);
  }

  .nav-list {
    display: flex;
    gap: 33px;
    list-style: none;
  }

  .nav-list a {
    position: relative;
    font-size: 1.3rem;
    color: rgb(240, 248, 255);
    text-decoration: none;
    padding-block: 16px;
  }

  .nav-list a::after {
    content: " ";
    width: 0px;
    height: 3px;
    background-image: linear-gradient(
      45deg,
      rgb(191, 28, 28, 75%),
      rgb(204, 110, 110, 75%)
    );
    position: absolute;
    border-radius: 2px;
    left: 0;
    bottom: 11px;
    transition: 0.4s;
  }

  .nav-list a:hover:after {
    width: 49px;
  }

  .nav-list a:hover {
    color: rgb(100, 159, 210);
  }

  .hamburger {
    cursor: pointer;
    display: none;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    /* The size of the SVG defines the overall size */
    height: 3em;
    /* Define the transition for transforming the SVG */
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: rgb(255, 255, 255);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    /* Define the transition for transforming the Stroke */
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;
