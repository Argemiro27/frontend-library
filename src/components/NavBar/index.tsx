import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as S from "./style";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Button from "../Button";

export default function NavBar() {
  return (
    <S.Nav>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <S.Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-3" navbarScroll>
              <div className="nav-link">
                <Nav.Link href="/home">Página Inicial</Nav.Link>
              </div>
              <div className="nav-link">
                <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.4">
                    Mais vendidos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Lançamentos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">Ficção</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Infantil
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Arte</NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="nav-link">
                <Nav.Link href="/estante">Estante</Nav.Link>
              </div>
              <div className="nav-link">
                <Nav.Link href="#">Sobre nós</Nav.Link>
              </div>
            </Nav>
            <Nav>
              <div className="nav-link">
                <Nav.Link href="#" className="carrinho"><ShoppingCartIcon/></Nav.Link>
              </div>
              <div className="nav-link">
                <Nav.Link href="#" className="profile"><AccountBoxIcon/></Nav.Link>
              </div>
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
