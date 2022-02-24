import React,{memo} from "react";
import Td from "./Td2";


const Tr = memo(({rowData,rowIdx,dispatch}) => {
    return (
        <>
            <tr>
                {Array(rowData.length).fill().map((td, cI) =>
                    <Td key={cI} dispatch={dispatch} cellData={rowData[cI]} cellIdx={cI} rowIdx={rowIdx} />)}
            </tr>
        </>
    )
})


export default Tr;