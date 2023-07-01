import { Button } from "react-bootstrap";
import NavBar from "../NavBar";
import * as S from "./style";
import "./style.css";

const HeroSection = () => {
  return (
    <>
      <S.Container className="container-test">
        <NavBar />

        <S.HeroSectionContainer>
          <section className="section1">
            <div className="background-container"></div>
            <div className="jumbotron mt-5 mb-5 text-center">
              <h1>Bem-vindo à e-Library.</h1>
              <p>Os melhores livros você só encontra aqui!</p>
              <p>Desenvolva a arte da leitura, cadastre-se já e conheça alguns dos nossos livros disponíveis!</p>
              <div className="button-container">
                <Button className="btn btnYellow" href="/login">
                  CADASTRE-SE JÁ! É GRÁTIS!
                </Button>
              </div>
            </div>
          </section>
        </S.HeroSectionContainer>
      </S.Container>
    </>
  );
};

export default HeroSection;
