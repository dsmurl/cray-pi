import React from "react";
import styled from "styled-components";
import DataProvider, { useDataContext } from "./data-provider";
import CONST from '../../utils/const';
import DataRow from "./data-row";
import ContextMenu from "../click-menu/context-menu";
import PopupMenuPanel from "../click-menu/popup-menu-panel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  position: relative;

  margin: 5px;
`;

const DataSheet = (props) => {
  const { rowList } = useDataContext();

  // console.log(' RENDER DataSheet:');

  return (
    <div>
      <Container id="sheet-box">
        {rowList.map((rowId, index) => (
          <DataRow rowId={rowId} head={index === 0} key={`row_${rowId}`} />
        ))}
      </Container>
      <ContextMenu>
        <PopupMenuPanel />
      </ContextMenu>
    </div>
  );
};

const DataWrappedDataSheet = ({ initNumRows = CONST.DEFAULT_NUM_ROWS, initNumCols = CONST.DEFAULT_NUM_COLS }) => (
  <DataProvider initNumRows={initNumRows} initNumCols={initNumCols}>
    <DataSheet />
  </DataProvider>
);

export default DataWrappedDataSheet;
