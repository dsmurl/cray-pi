import React from "react";
import styled from "styled-components";
import MenuRow from "./menu-row";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: white;
  border-radius: 0 6px 6px 6px;
  border: 1px solid black;
  padding: 10px 0;

  font-size: 16px;
  line-height: 22px;
`;

const PopupMenuPanel = (props) => {
  const AddRowAboveClicked = (arg) => {
    console.log(" clicked    Add Row Above");
  };
  const RemoveRowClicked = (arg) => {
    console.log(" clicked    Remove Row");
  };

  return (
    <Container>
      <MenuRow title="Add Row Above" onClick={AddRowAboveClicked} />
      <MenuRow title="Remove Row" onClick={RemoveRowClicked} />
    </Container>
  );
};

export default PopupMenuPanel;
