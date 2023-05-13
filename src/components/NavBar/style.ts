import styled from "styled-components";
import { colors } from "../../styles/global";

export const Logo = styled.div`
  background-image: url(/assets/logo.png);
  background-size: cover;
  height: 50px;
  width: 50px;
`

export const Nav = styled.div`
  background-color: ${colors.primary};
  font-size: 13px;
  text-transform: uppercase;
  border-top: 2px solid #10403B;
  div {
    background-color: ${colors.primary};
  }
`;
