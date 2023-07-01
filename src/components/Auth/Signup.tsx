import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      nome: nome,
      email: email,
      password: password
    };

    try {
      const response = await axios.post('http://localhost:8080/api/clientes/', userData);

      if (response.status === 200) {
        
        console.log('Cadastro realizado com sucesso!');
        toast.success('Cadastro realizado com sucesso!');
        // Aqui você pode redirecionar para a página de sucesso ou fazer qualquer ação adicional necessária
      } else {
        
        console.log('Ocorreu um erro ao realizar o cadastro.');
        toast.error('Ocorreu um erro ao realizar o cadastro.');
      }
    } catch (error) {
      console.log('Ocorreu um erro ao realizar o cadastro:', error);
      toast.error('Ocorreu um erro ao realizar o cadastro.');
    }
  };
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', minWidth: '100%'}}>
      <ToastContainer />

      <Row className="justify-content-center">
        <Col>
          <Card className='card-auth'>
            <Card.Body>
              <h2 className="text-center">Registre-se</h2>
              <Form onSubmit={handleSubmit}>
              <Form.Group>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control 
                  className='input'
                  type="nome" 
                  placeholder="Digite seu nome" 
                  id="nome"
                  value={nome}
                  onChange={handleNomeChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                  className='input'
                  type="email" 
                  placeholder="Digite seu email" 
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Senha</Form.Label>
                  <Form.Control 
                  className='input'
                  type="password" 
                  placeholder="Digite sua senha" 
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  />
                </Form.Group>

                <Button variant="success" type="submit" className='mt-3'>
                  REGISTRAR-SE
                </Button>
                <p className="text-center mt-3">Já possui uma conta? <Link to="/login">Faça login</Link></p>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
