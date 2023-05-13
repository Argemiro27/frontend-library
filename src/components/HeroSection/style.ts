import styled from "styled-components";
import { colors } from "../../styles/global";

export const Container = styled.div`
  max-height: 100vh;
  background-color: black;
  background-image: url(/assets/sectionBg.png);
  background-size: cover;
  overflow: hidden;
`



export const alignPolygon = {
  navBarHeight: "80px", 
};

export const HeroSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background-size: cover;
  max-height: 100vh;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - ${alignPolygon.navBarHeight});
`;

export const HeroWrapper = styled.div`
  height: 100vh;
`

export const Polygon = styled.div`
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  background-image: url(/assets/eSibaStore.png);
  background-size: 350px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${colors.primary};
  width: 70vh;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(0deg);
  transition: transform 2s ease;
  backdrop-filter: blur(10px); /* adiciona o efeito de blur */
  opacity: 1; /* ajusta a transparência do elemento */
  &:hover {
    transform: rotateY(360deg);
  }
`;

