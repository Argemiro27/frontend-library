import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import Layout from "../../../components/Adm/Layout";
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
      const response = await axios.get('http://localhost:8080/api/produtos');
      setBooks(response.data);
    } catch (error) {
      console.error('Erro ao buscar os livros:', error);
    }
  };

  const deleteBook = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/produtos/${id}`);
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
              <th scope="col">Titulo</th>
              <th scope="col">Capa</th>
              <th scope="col">Autor</th>
              <th scope="col">Descrição</th>
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
                <td>{book.titulo}</td>
                <td>{book.capa}</td>
                <td>{book.autor}</td>
                <td>{book.descricao}</td>
                <td>{book.preco}</td>
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
