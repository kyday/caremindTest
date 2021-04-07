import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoginSuccess, setLoginFailed } from "../../../src/modules/login";
import Login from "./Login";
import LoginSuccess from "./LoginSuccess";

const JwtToken = localStorage.getItem("JWT_KEY");

const FormLogin = () => {
  const { isLogin } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(JwtToken ? setLoginSuccess() : setLoginFailed());
  }, [dispatch]);

  return <>{isLogin ? <LoginSuccess /> : <Login />}</>;
};

export default FormLogin;
