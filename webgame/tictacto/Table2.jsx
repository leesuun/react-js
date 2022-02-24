import React,{memo} from "react";
import Tr from "./Tr2";


const Table = memo(({ tableData, onClick,dispatch }) => {
    
    
    return (
        <>
            <table>
                <thead></thead>
                <tbody>
                    {Array(tableData.length).fill().map((row, rI) =>
                        <Tr onClick={onClick} dispatch={dispatch}  key={rI} rowData={tableData[rI]} rowIdx={rI} />)}  
                </tbody>
            </table>
            
        </>
    )
})


export default Table;