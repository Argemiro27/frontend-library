import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as S from "./style";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Button from "../Button";
import { buscarDadosUsuario } from "../../services/Cliente";
import { isUserAuthenticated } from "../../utils/authUtils";

export default function NavBar() {
  const [nome, setNome] = useState("");
  const token = localStorage.getItem("token");
  const isAuthenticated = isUserAuthenticated();

  useEffect(() => {
    const fetchUser = async () => {
      const usuario = await buscarDadosUsuario(); // Chamando o serviço buscarDadosUsuario
      if (usuario) {
        setNome(usuario.nome);
      }
    };

    if (token) {
      fetchUser();
    }
  }, [token]);

  const handleLogout = () => {
    // Realize as ações necessárias para realizar o logout, como limpar o token no localStorage, redirecionar para a página de login, etc.
    localStorage.removeItem("token");
    // Redirecionar para a página de login, por exemplo:
    window.location.href = "/login";
  };
  
  return (
    <S.Nav>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">
            <S.Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-3" navbarScroll>
              {!isAuthenticated && (
                <div className="nav-link">
                  <Nav.Link href="/home">Página Inicial</Nav.Link>
                </div>
              )}
              {isAuthenticated && (
                <div className="nav-link">
                  <Nav.Link href="/estante">Estante</Nav.Link>
                </div>
              )}
              <div className="nav-link">
                <Nav.Link href="#">Sobre nós</Nav.Link>
              </div>
            </Nav>
            <Nav>
              <div className="nav-link">
                <Nav.Link href="#" className="carrinho"><ShoppingCartIcon /></Nav.Link>
              </div>
              {token ? (
                <div className="nav-link">
                  <div className="nome">Olá {nome}!</div>
                  <Nav.Link onClick={handleLogout} className="profile">
                    Logout
                  </Nav.Link>
                </div>
              ) : (
                <div className="nav-link">
                  <Nav.Link href="/adm/painel" className="profile"><AccountBoxIcon /></Nav.Link>
                </div>
              )}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button>
                <SearchIcon />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </S.Nav>
  );

}
