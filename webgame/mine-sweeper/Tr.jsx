import React, { useContext } from "react";
import { TableContext } from "./mine-sweeper";
import Td from "./Td"


const Tr = ({rowIdx}) => {
    const { tableData } = useContext(TableContext);
    return (
        <tr>
            {tableData[0] && Array(tableData[0].length).fill().map((td, i) =>
                <Td key={i} cellIdx={i} rowIdx={rowIdx} />)}
        </tr>
    )
}

export default Tr