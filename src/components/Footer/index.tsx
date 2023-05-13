import React, { HTMLProps } from "react";
import * as S from "./style";

export interface ISection extends HTMLProps<HTMLElement> {
  children: React.ReactNode;
  
}

const Section = ({ children }: ISection) => {
  return (
    <div>
      <>
        <S.SectionContainer>{children}</S.SectionContainer>
      </>
    </div>
  );
};

export default Section;
