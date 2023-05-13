import React from "react";
import { Section } from "../../components";
import HeroSection from "../../components/HeroSection";
import * as S from "./style";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Section>
        <S.SectionWrapper>
          <h1>Conheça nossos livros!</h1>
          <S.CardContainer>
          <div className="card card1">
          <div className="text-card">Encontre seu próximo livro favorito aqui e explore novos mundos!</div>
        </div>
        <div className="card card2">
          <div className="text-card">Compre à distância de forma rápida, prática e segura em nossa loja online.</div>
        </div>
        <div className="card card3">
          <div className="text-card">Nossos livros são armazenados e preparados para as entregas com muito cuidado.</div>
        </div>
        <div className="card card4">
          <div className="text-card">Receba seus livros diretamente em sua casa através dos Correios.</div>
        </div>
          </S.CardContainer>
        </S.SectionWrapper>
      </Section>
    </>
  );
}
