import styled from "styled-components";
import { colors } from "../../styles/global";

export const HeroSectionWrapper = styled.div`
  background-image: url(/assets/sectionBg.png);
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

export const SectionWrapper = styled.div`
  height: 100vh;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  .card {
    width: 320px;
    height: 340px;
    margin: 20px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    background-color: ${colors.black};
    border: 3px solid ${colors.black};
    box-shadow: 1px 1px 15px 3px ${colors.black};

    transition: 0.8s;
    :hover {
      transition: 0.8s;
      transform: scale(1.1);
    }
    .text-card {
      background-color: ${colors.black};
      min-height: 15vh;
      width: 250px;
      padding: 12px;
      border-radius: 0px 0px 10px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 14px;
      color: ${colors.white};
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
