import React from "react";
import Td from "./Td"


const Tr = ({rowData,rowIdx,dispatch }) => {
    return (
        <tr>    
            {Array(rowData.length).fill().map((td, cI) => <Td dispatch={dispatch}
                key={cI} rowIdx={rowIdx} cellIdx={cI} cellData={rowData[cI]}>{""}</Td>)}
        </tr>
    )
}

export default Tr