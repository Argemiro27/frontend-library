import React, { useState, useEffect } from "react";
import { NavBar, Section } from "../../components";
import {
  BookList,
  BookItem,
  BookTitle,
  BookAuthor,
  BookPrice,
  Wrapper,
} from "./style";
import axios from 'axios';
import { Book } from "../../interfaces/Book.interface";
import { Button } from "@mui/material";
import { AddCircle, Delete } from "@mui/icons-material";
import FinalizarCompra from "../Modal/FinalizaCompra";


const Estante: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [cart, setCart] = useState<Book[]>([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/produtos');
      setBooks(response.data);
    } catch (error) {
      console.error('Erro ao buscar os livros:', error);
    }
  };

  const addToCart = (book: Book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const removeFromCart = (book: Book) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== book.id));
  };

  const filteredBooks = books.filter((book) =>
    book.titulo.toLowerCase().includes(filter.toLowerCase())
  );

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <NavBar />
      <Section>
        <Wrapper>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ width: "20%", marginRight: "2rem" }}>
              <h1>Estante</h1>
              <p>
                Aqui você confere os melhores livros pelos melhores preços do mercado! Não deixe de usar os filtros para pesquisar pelo que você precisa ou procurar pelas melhores opções pra você!
              </p>
              <h4 className="subtitle mb-3 mt-3">Filtros</h4>
              <input
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setFilter(e.target.value)}
              />
  
              <h4 className="subtitle mb-3 mt-3">Carrinho de Compras</h4>
              {cart.length === 0 ? (
                <p>O carrinho está vazio.</p>
              ) : (
                <ul>
                  {cart.map((book) => (
                    <li key={book.id}>
                      <Button
                        variant="contained"
                        color="error"
                        style={{ marginRight: '0.5rem' }}
                        startIcon={<Delete style={{ marginLeft: '0.5rem' }} />}
                        onClick={() => removeFromCart(book)}
                      />
                      <span>{book.titulo}</span>
                    </li>
                  ))}
                </ul>
              )}
  
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenModal}
                style={{ marginTop: '1rem' }}
              >Finalizar Compra</Button>
  
              <FinalizarCompra open={openModal} onClose={handleCloseModal} books={cart} />
  
            </div>
  
            <BookList style={{ width: "80%", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {filteredBooks.map((book, index) => (
                <BookItem key={index} style={{ width: "calc(33.33% - 1rem)" }}>
                  <div>
                    <Button
                      variant="contained"
                      color="success"
                      startIcon={<AddCircle />}
                      onClick={() => addToCart(book)}
                      className="mb-2 mt-3"
                    >Carrinho</Button>
                  </div>
                  <img src={book.capa} alt={book.titulo} />
                  <BookTitle>{book.titulo}</BookTitle>
                  <BookAuthor>By {book.autor}</BookAuthor>
                  <BookPrice>${book.preco}</BookPrice>
                </BookItem>
              ))}
            </BookList>
          </div>
        </Wrapper>
      </Section>
    </>
  );  
}

export default Estante;