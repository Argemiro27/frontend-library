import React from "react";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
import * as S from './style';

const MyPage = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <S.AuthContainer>
      <LoginForm/>
      <RegisterForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        name=""
        email=""
        password=""
        confirmPassword=""
      />
    </S.AuthContainer>
  );
};

export default MyPage;
