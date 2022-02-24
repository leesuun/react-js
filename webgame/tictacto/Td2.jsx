import React, {memo, useCallback } from "react";
import { CLICK_CELL, CHANGE_TURN } from "./tictacto_practice";


const Td = memo(({ rowIdx, cellIdx,cellData, dispatch }) => {
    console.log("td render")
    
    const onClickTd = useCallback(() => {
        console.log("onClickTd")
        if (cellData) return;
        dispatch({ type: CLICK_CELL, row: rowIdx, cell: cellIdx });
        
    })

    return (
        <>
            <td onClick={onClickTd}>{cellData}</td>
        </>
    )
})


export default Td;