import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const Navbar: React.FC = () => {
  const Nav = styled.div`
    height: 70px;
    background-color: #333;
  `;

  const Div = styled(Nav)`
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Ul = styled.ul`
    display: flex;
  `;

  const Li = styled.li`
    font-size: 18px;
    color: #fff;
    list-style: none;
    margin: 0 10px;
    cursor: pointer;
  `;

  const history = useHistory();

  return (
    <Nav>
      <Div>
        <Li onClick={() => history.push("/")}>Blog</Li>
        <Ul>
          <Li onClick={() => history.push("/")}>Home</Li>
          <Li onClick={() => history.push("/posts/new")}>New post</Li>
        </Ul>
      </Div>
    </Nav>
  );
};
