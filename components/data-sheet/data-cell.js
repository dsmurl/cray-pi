import React from "react";
import styled, { css } from "styled-components";
import { useDataContext } from "./data-provider";

const Container = styled.div`
  flex: 1 1;

  display: flex;
  flex-direction: row;
  height: 28px;
  border: 1px solid grey;
`;

const CellInput = styled.input`
  width: 100%;
  height: 26px;
  border: 1px;
  border-radius: 0px;

  :focus {
    outline: yellow;
    background-color: lightgoldenrodyellow;
  }
`;

const DataCell = ({ rowId, colIndex }) => {
  const { updateCellData, getData } = useDataContext();

  // console.log(' RENDER DataCell:');

  return (
    <Container>
      <CellInput
        value={getData(rowId, colIndex)}
        onChange={(event) => {
          // console.log('   event: ', event.target.value);
          updateCellData(rowId, colIndex, event.target.value);
        }}
      />
    </Container>
  );
};

export default DataCell;
