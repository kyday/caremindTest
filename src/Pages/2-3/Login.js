import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { LOGINAPI } from "../../../src/config";

/*

임시 아이디 : careMind
비밀번호 : 1234

*/

function Login() {
  const [inputValue, setInputValue] = useState({
    id: "",
    password: "",
  });

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const submitInputValue = async (e) => {
    e.preventDefault();

    const res = await axios.get(LOGINAPI, {
      id: inputValue.id,
      password: inputValue.password,
    });

    if (id === res.data.user.id && password === res.data.user.password) {
      alert(`${id} 님 환영합니다.`);

      localStorage.setItem("JWT_KEY", true);
      window.location.replace("/login");
    } else {
      alert(`아이디 또는 비밀번호가 일치하지 않습니다.`);
    }
  };

  const { id, password } = inputValue;

  return (
    <LoginPage>
      <InputGroup>
        <Title>LOGIN</Title>
        <Form onSubmit={submitInputValue}>
          <Input
            type='text'
            name='id'
            value={id}
            placeholder='아이디'
            onChange={handleInputValue}
          />
          <Input
            type='password'
            name='password'
            placeholder='비밀번호'
            value={password}
            onChange={handleInputValue}
          />
          <Button>로그인</Button>
        </Form>
      </InputGroup>
    </LoginPage>
  );
}

export default Login;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginPage = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #4d4d4d;
  background-color: #fff;
  padding: 10%;
`;

export const Input = styled.input`
  border: 1px solid #000;
  margin: 1.5rem;
  padding: 1rem;
`;

export const Button = styled.button`
  width: 200px;
  color: #fff;
  background-color: #000;
  margin: 1.5rem;
  padding: 1rem;
  border-radius: 2.25rem;
  font-size: 0.875rem;
`;
