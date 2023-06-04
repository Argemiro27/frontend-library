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

const Estante: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://backelibrarystore.vercel.app/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Erro ao buscar os livros:', error);
    }
  };

  const handleBookClick = (book: Book) => {
    // Lógica para lidar com o clique em um livro
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <Section>
        <Wrapper>
          <div style={{ display: "flex" }}>
            <div style={{ width: "20%", marginRight: "2rem" }}>
              <h1>Estante</h1>
              <p>
                Aqui você confere os melhores livros pelos melhores preços do
                mercado! Não deixe de usar os filtros para pesquisar pelo que
                você precisa ou procurar pelas melhores opções pra você!
              </p>
              <h4 className="subtitle">Filtros</h4>
              <input
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            
            <BookList style={{ width: "80%" }}>
              {filteredBooks.map((book, index) => (
                <BookItem key={index} onClick={() => handleBookClick(book)}>
                  <img src={book.image} alt={book.title} />
                  <BookTitle>{book.title}</BookTitle>
                  <BookAuthor>By {book.author}</BookAuthor>
                  <BookPrice>${book.price}</BookPrice>
                </BookItem>
              ))}
            </BookList>
          </div>
        </Wrapper>
      </Section>
    </>
  );
};

export default Estante;
