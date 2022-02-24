import React, { useCallback, useContext } from "react";
import {
    TableContext, CODE, OPEN_CELL, CLICK_MINE,
    FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL
} from "./mine-sweeper";


const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444',
      };
    case CODE.CLICKED_MINE:
    case CODE.OPENED:
      return {
        background: 'white',
      };
    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return {
        background: 'yellow',
      };
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return {
        background: 'red',
      };
    default:
      return {
        background: 'white',
      };
  }
    
}
const getTdText = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return '';
    case CODE.MINE:
      return '💥';
    case CODE.CLICKED_MINE:
      return '펑';
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return '❗';
    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return '❓';
    default:
      return code || '';
  }
    
}


const Td = ({ rowIdx, cellIdx })=> {
    const { tableData, dispatch, halted } = useContext(TableContext);

    const onClickTd = useCallback(() => {
        
        if (halted) { return };

        switch (tableData[rowIdx][cellIdx]) {
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:
            case CODE.FLAG:
            case CODE.FLAG_MINE:
            case CODE.OPENED:
                return;

            case CODE.NORMAL:
                dispatch({ type: OPEN_CELL, row: rowIdx, cell: cellIdx })
                return;
            case CODE.MINE:
                dispatch({ type: CLICK_MINE, row: rowIdx, cell: cellIdx })  
                return;
        }
    },[tableData[rowIdx][cellIdx], halted])

    const onRightClickTd = useCallback((e) => {
        e.preventDefault();
        if (halted) { return };
        switch (tableData[rowIdx][cellIdx]) {
            case CODE.NORMAL:
            case CODE.MINE:
                dispatch({ type: FLAG_CELL, row: rowIdx, cell: cellIdx });
                return;
            case CODE.FLAG_MINE:
            case CODE.FLAG:
                dispatch({ type: QUESTION_CELL, row: rowIdx, cell: cellIdx });
                return;
            case CODE.QUESTION_MINE:
            case CODE.QUESTION:
                dispatch({ type: NORMALIZE_CELL, row: rowIdx, cell: cellIdx });
                return;
            default:
            return;
        }
    }, [tableData[rowIdx][cellIdx], halted]);
    
    return (
        <td onClick={onClickTd} onContextMenu={onRightClickTd}
            style={getTdStyle(tableData[rowIdx][cellIdx])}>  
            {getTdText(tableData[rowIdx][cellIdx])}
        </td>
        )

}

export default Td