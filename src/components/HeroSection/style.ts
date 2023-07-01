import styled from "styled-components";
import { colors } from "../../styles/global";

export const Container = styled.div`
  max-height: 100vh;
  overflow: hidden;
  color: ${colors.white};
  .jumbotron{
    background-color: ${colors.primary};
    padding: 20px;
    border-radius: 10px;
  }
`


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
`;

export const HeroWrapper = styled.div`
  height: 100vh;
`
