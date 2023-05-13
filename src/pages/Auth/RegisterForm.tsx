
import React from "react";
import { Form, Button } from "react-bootstrap";
import * as S from './style';

interface RegisterFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  onChange,
  name,
  email,
  password,
  confirmPassword,
}) => {
  return (
    <S.Card>
      <Form onSubmit={onSubmit} className="form">
        <Form.Group controlId="formName">
          <Form.Label>Nome completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome completo"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirme sua senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirme sua senha"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </S.Card>
  );
};
