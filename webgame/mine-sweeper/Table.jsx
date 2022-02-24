import React, { useContext } from "react";
import { TableContext } from "./mine-sweeper";
import Tr from "./Tr"


const Table = () => {
    const { tableData } = useContext(TableContext);
    return (
        <table>
            <thead></thead>
            <tbody>
                {Array(tableData.length).fill().map((tr, i) =>
                    <Tr rowIdx={i} key={i} />)}
            </tbody>
        </table>
    )
}

export default Table