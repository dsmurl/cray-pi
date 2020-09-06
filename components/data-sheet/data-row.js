import React from "react";
import styled, { css } from "styled-components";
import { useDataContext } from "./data-provider";
import DataCell from "./data-cell";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;

  ${({ head }) =>
    css`
      div > input {
        background-color: ${head ? "lightgrey" : "white"};
        font-size: ${head ? "16px" : "12px"};
        font-weight: ${head ? "bold" : "normal"};
        text-align: ${head ? "center" : "left"};
        border: 0px;
      }
    `}
`;

const DataRow = (props) => {
  const { colList } = useDataContext();
  const { rowId, head = false } = props;

  // console.log(' RENDER DataRow:');

  return (
    <Container head={head}>
      {colList.map((col, index) => (
        <DataCell
          rowId={rowId}
          colIndex={index}
          key={`cell_${rowId}_${index}`}
        />
      ))}
    </Container>
  );
};

export default DataRow;
