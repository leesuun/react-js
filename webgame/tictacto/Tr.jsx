import React, {memo} from "react";
import Td from "./Td"


const Tr = memo(({ rowData, rowIdx, dispatch }) => {
    console.log("tr render")
    return (
        <tr>    
            {Array(rowData.length).fill().map((td, cI) => <Td dispatch={dispatch}
                key={cI} rowIdx={rowIdx} cellIdx={cI} cellData={rowData[cI]}>{""}</Td>)}
        </tr>
    )
})

export default Tr