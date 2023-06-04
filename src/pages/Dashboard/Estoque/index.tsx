import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import Layout from "../../../components/Adm/Layout";
import * as S from "./style";
import './style.css';
import axios from 'axios';
import { Delete, Add, Edit } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { Book } from "../../../interfaces/Book.interface";

export default function Estoque() {
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

  const deleteBook = async (id: string) => {
    try {
      await axios.delete(`https://backelibrarystore.vercel.app/books/${id}`);
      fetchBooks(); // Recarrega os livros após a exclusão
      console.log('Livro excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir o livro:', error);
    }
  };

  return (
    <>
      <Layout>
        <div className="adicionarlivro">
          <a href="/adm/estoque/newbook" className="addbook">
            <Button variant="contained" className="btnYellow"><Add /></Button>
          </a>
        </div>
        <MDBTable className="table table-hover">
          <MDBTableHead className="table-head table-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
              <th scope="col">ISBN</th>
              <th scope="col">Nome do Livro</th>
              <th scope="col">Autor</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Preço</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </MDBTableHead>
          <MDBTableBody className="table-dark">
            {books.map((book, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{book.id}</td>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.quantity}</td>
                <td>{book.price}</td>
                <td>
                  <IconButton>
                    <Edit />
                  </IconButton>
                </td>
                <td>
                  <IconButton onClick={() => deleteBook(book.id)}>
                    <Delete />
                  </IconButton>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </Layout>
    </>
  );
}
