import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { LoginPage, InputGroup } from "./Login";

function LoginSuccess(props) {
  const loginData = useSelector((state) => state.login);
  return (
    <LoginSuccessLayout>
      <LoginSuccessInputGroup>
        <img alt='profile' src={loginData.profile} />
        <WelcomeMessage>케어마인드에 오신걸 환영합니다.</WelcomeMessage>
        {`${loginData.user}님`}
      </LoginSuccessInputGroup>
    </LoginSuccessLayout>
  );
}

export default LoginSuccess;

export const LoginSuccessLayout = styled(LoginPage)``;
export const LoginSuccessInputGroup = styled(InputGroup)``;
export const WelcomeMessage = styled.p`
  font-size: 1rem;
  margin-bottom: 10%;
`;
