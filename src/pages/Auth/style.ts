
import { colors } from "../../styles/global";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black};
  border-radius: 15px;
  max-width: 250px;
  padding: 25px;
  color: ${colors.lightgray};
  border: 1px solid ${colors.black};
  box-shadow: 3px 3px 3px ${colors.black};
  top: 0; left: 0; right: 0; bottom: 0;
  margin: auto;
`;

export const AuthContainer = styled.div`
  background-color: ${colors.primary};
  height: 100vh;
  width: 100%;
`
