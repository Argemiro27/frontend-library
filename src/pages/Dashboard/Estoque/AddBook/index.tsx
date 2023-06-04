import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Book } from '../../../../interfaces/Book.interface'
import Layout from '../../../../components/Adm/Layout';
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Material UI icons
import { AccountCircle, Description, LocalLibrary, MonetizationOn, ShoppingBasket, Save } from '@mui/icons-material';
import { Button } from '@material-ui/core';

const AddBook: React.FC = () => {
  const [book, setBook] = useState<Book>({
    id: "",
    description: '',
    title: '',
    author: '',
    isbn: '',
    price: 0,
    quantity: 0,
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://backelibrarystore.vercel.app/books', book);
      toast.success('Livro cadastrado com sucesso!');
      console.log('Livro cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar livro:', error);
      toast.error('Erro ao cadastrar livro');
    }
  };

  return (
    <Layout>
      
      <div className="formwrapper">
        <h2>Cadastrar livro</h2>
        <form onSubmit={handleSubmit}>
          <label className="input-label mb-4">
            <AccountCircle />
            Título
            <MDBInput
              id="title"
              name="title"
              value={book.title}
              onChange={handleChange}
              required
            />
          </label>

          <label className="input-label mb-4">
            <AccountCircle />
            Autor
            <MDBInput
              id="author"
              name="author"
              value={book.author}
              onChange={handleChange}
              required
            />

          </label>

          <label className="input-label mb-4">
            <Description />
            Descrição
            <MDBInput
              id="description"
              name="description"
              value={book.description}
              onChange={handleChange}
              required
            />

          </label>

          <label className="input-label mb-4">
            <LocalLibrary />
            ISBN
            <MDBInput
              id="isbn"
              name="isbn"
              value={book.isbn}
              onChange={handleChange}
              required
            />

          </label>

          <label className="input-label mb-4">
            <MonetizationOn />
            Preço
            <MDBInput
              id="price"
              name="price"
              value={book.price}
              onChange={handleChange}
              required
            />

          </label>

          <label className="input-label mb-4">
            <ShoppingBasket />
            Quantidade
            <MDBInput
              id="quantity"
              name="quantity"
              value={book.quantity}
              onChange={handleChange}
              required
            />

          </label>

          <Button type="submit" className='btnYellow'>
            <Save />
            Cadastrar

          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default AddBook;
