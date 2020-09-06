import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: white;
  padding: 0 10px;

  :hover {
    background-color: lightgray;
  }
`;

const Title = styled.div`
  padding-top: 5px;
`;

const MenuRow = (props) => {
  const { title = "blank", onClick = () => null } = props;

  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>
    </Container>
  );
};

export default MenuRow;
