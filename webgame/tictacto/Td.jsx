import React, { useCallback } from "react";
import { CLICK_CELL,CHANGE_TURN } from "./tictacto_hooks";

const Td = ({ rowIdx, cellIdx,dispatch,cellData }) => {
    
    const onClickTd = useCallback(() => {
        dispatch({ type: CLICK_CELL, row: rowIdx, cell: cellIdx })
        dispatch({ type: CHANGE_TURN })
    }, []);

    return (
        <td onClick={onClickTd}>{cellData}</td>
    )
}

export default Td