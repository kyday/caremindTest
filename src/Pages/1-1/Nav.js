import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";
import Content from "./Content";

function Nav(props) {
  const [status, setStatus] = useState(false);

  const handleButtonClick = () => {
    setStatus(!status);
  };

  return (
    <>
      <Navbar>
        <Container>
          <StyledLink to='/home'>Logo</StyledLink>
          <Ul>
            {Menu.map((list, idx) => {
              return (
                <Li key={idx} status={status}>
                  <StyledLink to={list.to}>{list.name}</StyledLink>
                </Li>
              );
            })}
          </Ul>
          <Button onClick={handleButtonClick}>☰</Button>
        </Container>
      </Navbar>
      <Content />
    </>
  );
}

export default Nav;

export const Navbar = styled.nav`
  overflow: hidden;
  padding: 1rem 1rem;
  background-color: #333;
  position: relative;
`;

export const Container = styled.div`
  display: flex;

  ${({ theme }) => theme.mobile`
    display: block;
  `};
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mobile`
    display: block;
  `};
`;

export const Li = styled.li`
  visibility: ${(props) => {
    return props.status ? "hidden" : "visible";
  }};
  list-style: none;
  ${({ theme }) => theme.mobile`
    display: ${(props) => {
      return props.status && "none";
    }};
  `}
`;

export const Button = styled.button`
  font-size: 2rem;
  color: #fff;
  position: relative;
  left: 80%;

  ${({ theme }) => theme.mobile`
    display: block;
    position: absolute;
    left: 85%;
    top: 20px;
  `}
`;

export const StyledLink = styled(Link)`
  color: #fff;
  padding: 1rem 1rem;
  text-decoration: none;
  font-size: 17px;
  display: inline-block;

  &[href="/home"] {
    background-color: #4caf50;
  }

  &:hover {
    background-color: #ddd;
    color: black;
  }

  ${({ theme }) => theme.mobile`
    max-width: 85%;
    display: block;
    flex: 1;
  `}
`;
