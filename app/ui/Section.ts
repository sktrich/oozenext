import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  // position: static;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--font-body);
  font-family: YOZ, sans-serif;

  &:first-child {
    background-color: rgb(240, 248, 255);
  }
  &:nth-child(2n + 2) {
    background-color: var(--black-bg);
  }
  &:nth-child(2n + 3) {
    background-color: var(--opage);
  }
  &:nth-last-child(1) {
    background-color: var(--black);
    color: var(--link);
    font-family: pythia, system-ui;
    height: 35vh;
  }
`;
