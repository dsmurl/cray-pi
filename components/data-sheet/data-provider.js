import React from "react";
import axios from "axios";
import SheetUtils from "../../utils/sheet-utils";
import CONST from "../../utils/const";

const initContextState = {
  sheetData: {},
  colList: [],
  rowList: [],
  updateCellData: () => null,
};

const DataContext = React.createContext();

const DataProvider = ({
  children,
  initNumRows = CONST.DEFAULT_NUM_ROWS,
  initNumCols = CONST.DEFAULT_NUM_COLS,
}) => {
  const [sheetData, setSheetData] = React.useState(initContextState.sheetData);
  const [rowList, setRowList] = React.useState(initContextState.rowList);
  const [colList, setColList] = React.useState(initContextState.colList);

  React.useEffect(() => {
    console.log("   CALC makeSheetConfig:: ");
    const newConfig = SheetUtils.makeSheetConfig(initNumRows, initNumCols);
    setSheetData(newConfig.sheetData);
    setRowList(newConfig.rowList);
    setColList(newConfig.colList);
  }, []);

  React.useEffect(() => {
    console.log("   CALC colList:: ");
    if (rowList.length) {
      setColList(sheetData[rowList[0]]);
    }
  }, [rowList.length]);

  // React.useEffect(() => {
  //   axios
  //     .get("https://sheet.best")
  //     .then(function (response) {
  //       // handle success
  //       console.log("   response.data: ", response.data);
  //       setSheetData(response.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // }, []);

  const updateCellData = React.useCallback(
    (rowId, colIndex, value) => {
      sheetData[rowId][colIndex] = value;
      setSheetData({ ...sheetData });
    },
    [sheetData, setSheetData]
  );

  const getData = React.useCallback(
    (rowId, colIndex) => {
      return sheetData[rowId][colIndex];
    },
    [sheetData]
  );

  // console.log(" sheetData: ", sheetData);

  const value = React.useMemo(() => {
    console.log(" CRUNCH!!! ");

    return {
      rowList,
      colList,
      updateCellData,
      getData,
    };
  }, [rowList, colList, updateCellData, getData]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => React.useContext(DataContext);

export default DataProvider;
