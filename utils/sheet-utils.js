import CONST from "./const";

let currentAUID = 1;
const getAUID = () => currentAUID++;

let currentUVal = 1;
const getUVal = () => currentUVal++;

export const makeDataRow = (cols = 3) => {
  const tempRow = [];
  for (let c = 0; c < cols; c++) {
    tempRow.push(`${getUVal()}`);
  }

  return tempRow;
};

export const makeSheetConfig = (
  rows = CONST.DEFAULT_NUM_ROWS,
  cols = CONST.DEFAULT_NUM_COLS
) => {
  let sheetConfig = {
    sheetData: [],
    rowList: [],
  };

  for (let r = 0; r < rows; r++) {
    const newRowId = getAUID();
    sheetConfig.sheetData[newRowId] = makeDataRow(cols);
    sheetConfig.rowList.push(`${newRowId}`);
  }

  sheetConfig.colList = sheetConfig.sheetData[sheetConfig.rowList[0]];

  console.log("     creating sheetConfig: ", sheetConfig);

  return sheetConfig;
};

export default {
  makeDataRow,
  makeSheetConfig,
};
