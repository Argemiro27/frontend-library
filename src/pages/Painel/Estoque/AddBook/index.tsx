import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Layout from '../../../../components/Adm/Layout';
import './style.css';

const CadastrarLivro = () => {
  const [produto, setLivro] = useState({
    titulo: '',
    capa: '',
    autor: '',
    descricao: '',
    preco: ''
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLivro((prevLivro) => ({ ...prevLivro, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Dados do livro:', produto); // Adicione este console log para visualizar os dados do livro
  
    axios
      .post('http://localhost:8080/api/produtos', produto)
      .then((response) => {
        console.log('Livro cadastrado com sucesso!');
        toast.success('Livro cadastrado com sucesso!');
        // Limpar o formulário
        setLivro({
          titulo: '',
          capa: '',
          autor: '',
          descricao: '',
          preco: ''
        });
      })
      .catch((error) => {
        console.error('Erro ao cadastrar o livro:', error);
        toast.error('Erro ao cadastrar livro!');
      });
  };
  return (
    <Layout>
      <div className='formwrapper'>
        <h2>Cadastrar Livro</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Título:</label>
            <input
              type="text"
              name="titulo"
              value={produto.titulo}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Capa (URL):</label>
            <input
              type="text"
              name="capa"
              value={produto.capa}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Autor:</label>
            <input
              type="text"
              name="autor"
              value={produto.autor}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Descrição:</label>
            <input
              type="text"
              name="descricao"
              value={produto.descricao}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Preço:</label>
            <input
              type="text"
              name="preco"
              value={produto.preco}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>
      </div>
    </Layout>
  );
};

export default CadastrarLivro;
