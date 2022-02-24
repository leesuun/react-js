import React, { useCallback,memo } from "react";
import { CLICK_CELL,CHANGE_TURN } from "./tictacto_hooks";



const Td = memo(({ rowIdx, cellIdx, dispatch, cellData }) => {
    console.log("td render")
    const onClickTd = useCallback(() => {
        if (cellData) return;
        dispatch({ type: CLICK_CELL, row: rowIdx, cell: cellIdx })
        // dispatch({ type: CHANGE_TURN })
    }, [cellData]);

    return (
        <td onClick={onClickTd}>{cellData}</td>
    )
})

export default Td