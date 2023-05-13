import { colors } from "../../styles/global";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 2rem 0;
`;

export const BookList = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  padding: 20px;
  flex-wrap: wrap;
`;

export const BookItem = styled.div`
  background-color: ${colors.lightgreen};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 200px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  display: block;
  text-align: center;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
  img {
    width: 120px;
    height: 180px;
    padding: 10px;
  }
`;

export const BookTitle = styled.h2`
  font-size: 1.5rem;
  margin: 1rem;
`;

export const BookAuthor = styled.p`
  font-size: 1rem;
  margin: 0.5rem 1rem;
`;

export const BookPrice = styled.p`
  font-size: 1rem;
  margin: 0.5rem 1rem;
  font-weight: bold;
`;

export const BookImage = styled.image`
  margin: 0.5rem 1rem;
  font-weight: bold;
`;
