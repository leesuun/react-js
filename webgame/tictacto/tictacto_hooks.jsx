import React, { useState, useReducer, useCallback } from "react";
import Table from "./Table";



// state
const initialArg = {
    winner : "",
    turn : "O",
    tableData : new Array(3).fill(["", "", ""])
}

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";

const reducer = (state, action) => {
    console.log("reducer")
    switch (action.type) {
        case SET_WINNER: 
            // state.winner = action.winner -> 잘못된 방식
            // 항상 새로운 객체를 생성해서 바뀌는 부분만 바꿔줘야함
            return {
                ...state,
                winner: action.winner
            }    
        case CLICK_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]];
            tableData[action.row][action.cell] = state.turn;

            return {
                ...state,
                tableData,

            }
        }
        case CHANGE_TURN: {
            console.log(state.turn)
            return {
                ...state,
                turn : state.turn === "O" ? "X" : "O"
            }
        }
    }
    
}


const Tictacto = () => {

    const [state, dispatch] = useReducer(reducer, initialArg);

    // const [winner, setWinner] = useState("");
    // const [turn, setTurn] = useState("O");
    // const [tableDate, setTableDate] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);

    const onClickTable = useCallback(() => {
        // action
        dispatch({type: "SET_WINNER", winner: "O"})
    }, [])

    return (
        <>
            <Table onClick={onClickTable} dispatch={dispatch} tableData={state.tableData} />
            {state.winner && <div>{state.winner }님의 승리</div> }
        </>
    )
    
}


export default Tictacto