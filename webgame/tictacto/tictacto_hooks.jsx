import React, { useState, useEffect, useReducer, useCallback } from "react";
import Table from "./Table";



// state
const initialArg = {
    winner : "",
    turn : "O",
    tableData: new Array(3).fill(["", "", ""]),
    recentCell : [-1,-1]
}

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESET_GAME = "RESET_GAME";

const reducer = (state, action) => {
    //state가 비동기적으로 바뀜
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
                recentCell: [action.row, action.cell]

            }
        }
        case CHANGE_TURN: {
            return {
                ...state,
                turn : state.turn === "O" ? "X" : "O"
            }
        }
            
        case RESET_GAME: {
            return {
                ...state,
                turn : "O",
                tableData: new Array(3).fill(["", "", ""]),
                recentCell : [-1,-1]

            }
        }
    }
    
}


const Tictacto = () => {

    const [state, dispatch] = useReducer(reducer, initialArg);
    const { tableData, winner, turn, recentCell } = state;

    // const [winner, setWinner] = useState("");
    // const [turn, setTurn] = useState("O");
    // const [tableDate, setTableDate] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);

    const onClickTable = useCallback(() => {
        // action
        dispatch({type: "SET_WINNER", winner: "O"})
    }, [])

    useEffect(() => {
        const [row, cell] = recentCell;
        if (row < 0) {
            return;
        }
            
        let win = false;
        if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
            win = true;
        }
        if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
            win = true;
        }
        if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
            win = true;
        }
        if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
            win = true;
        }
        console.log(turn,win)

        if (win) { // 승리시
            dispatch({ type: SET_WINNER, winner: turn });
            dispatch({ type: RESET_GAME })
        } else {

            let all = true;
            tableData.forEach((row) => {
                row.forEach((cell) => {
                    if (!cell) {
                        all = false;
                    }
                })         
            })
            if (all) {
                dispatch({ type: RESET_GAME })
            } else {
                dispatch({ type: CHANGE_TURN })
            }

        }
        
    },[recentCell])

    return (
        <>
            <Table onClick={onClickTable} dispatch={dispatch} tableData={tableData} />
            {winner && <div>{winner }님의 승리</div> }
        </>
    )
    
}


export default Tictacto