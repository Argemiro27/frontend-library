import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import { toast } from 'react-toastify';
import jwt_decode from 'jwt-decode';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/clientes/login', loginData);

      if (response.status === 200) {
        // Armazena o token no localStorage
        localStorage.setItem('token', response.data.token);
        const token = response.data.token;

        try {
          // Descriptografa o token para obter o ID do usuário
          const decodedToken: { id?: number } = jwt_decode(token);
          const userId = decodedToken?.id;

          // Salva o ID do usuário no localStorage
          localStorage.setItem('userId', userId?.toString() || '');

          console.log('Login realizado com sucesso!');
          toast.success('Login realizado com sucesso!');
          window.location.href = '/estante';
          console.log('Token:', token);
          console.log('ID do usuário:', userId);

          // Verifica se o ID do usuário está disponível
          if (userId) {
            // Busca os detalhes do cliente com base no ID do usuário
            try {
              const clienteResponse = await axios.get(`http://localhost:8080/api/clientes/${userId}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });

              if (clienteResponse.status === 200) {
                const cliente = clienteResponse.data;
                console.log('Detalhes do cliente:', cliente);
                // Faça o que você precisa com os detalhes do cliente, como exibir o nome, email, etc.
              }
            } catch (error) {
              console.log('Ocorreu um erro ao buscar os detalhes do cliente:', error);
            }
          } else {
            console.log('Cliente logado não encontrado na lista de clientes.');
          }
        } catch (error) {
          console.log('Erro ao decodificar o token:', error);
        }
      } else {
        console.log('Falha no login. Verifique suas credenciais.');
        toast.success('Falha no login! Verifique suas credenciais.');
      }
    } catch (error) {
      console.log('Ocorreu um erro:', error);
      toast.success('Ocorreu um erro!');
    }
  };


  return (
    <>
    <ToastContainer />
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh', minWidth: '100%' }}
    >

      <Row className="justify-content-center">
        <Col>
          <Card className="card-auth">
            <Card.Body>
              <h2 className="text-center">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="input"
                    type="email"
                    placeholder="Digite seu email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    className="input"
                    type="password"
                    placeholder="Digite sua senha"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange} />
                </Form.Group>

                <Button variant="success" type="submit" className="mt-3">
                  ENTRAR
                </Button>
                <p className="text-center mt-3">
                  Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
                </p>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container></>
  );
};

export default Login;
