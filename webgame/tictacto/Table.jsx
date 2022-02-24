import React from "react";
import Tr from "./Tr"


const Table = ({ onClick, tableData, dispatch }) => {
    console.log("table render")
    return (
        <table>
            {Array(tableData.length).fill().map((tr, rI) => <Tr dispatch={dispatch}
                key={rI} rowIdx={rI} rowData={tableData[rI]} />)}
        </table>
    )
}

export default Table