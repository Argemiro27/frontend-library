import styled from "styled-components";
import { colors } from "../../styles/global";

export const HeroSectionWrapper = styled.div`
  background-image: url("/src/assets/images/homeBg.jpg");
  background-size: cover;
  height: 100vh;
  width: 100%;
`;


export const CardContainer = styled.div`
  .card {
    width: 250px;
    height: 340px;
    margin: 20px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    background-color: ${colors.black};
    border: 3px solid ${colors.black};
    box-shadow: 1px 1px 6px ${colors.black};
    .text-card {
      background-color: ${colors.black};
      color: ${colors.white};
      padding: 10px;
    }
  }
  .card.card1 {
    background-image: url("/assets/bgCard1.jpg");
  }
  .card.card2 {
    background-image: url("/assets/bgCard2.jpg");
  }
  .card.card3 {
    background-image: url("/assets/bgCard3.jpg");
  }
  .card.card4 {
    background-image: url("/assets/bgCard4.jpg");
  }
`;
