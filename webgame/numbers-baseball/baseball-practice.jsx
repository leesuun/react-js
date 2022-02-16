import React, { Component, memo } from "react";
import Try from "./try"
const { useState,useRef } = React;


function getNumbers() {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arr = [];
    for (let i = 0; i < 4; i++){
        const randomNum = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        arr.push(randomNum)
    }
    return arr;
}

const Baseball = memo(() => {
    
    const [result, setResult] = useState("");
    const [value, setValue] = useState("");
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);
    const inputRef = useRef(null);

    
    const gameReset = () => {
        
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (answer.join("") === value) {
            setResult(`${value} 홈런! `)
            setTries((prevTries) => {
                return [...prevTries, { try: value, result: "홈런" }]
            })
            gameReset();
        } else {
            const answerArray = value.split("").map(v => parseInt(v));
            let strike = 0;
            let ball = 0;
        
            if (tries.length > 9) {
                //패배
                setResult(`도전 기회 소진 답은: ${answer.join("")} `)
                gameReset();
            } else {
                // 기회
                for (let i = 0; i < answer.length; i++){
                    if (answerArray[i] === answer[i]) {
                        strike++;
                    } else if (answer.includes(answerArray[i])) {
                        ball++;
                    }
                }
                setTries((prevTries) => {
                    return [...prevTries, { try: value, result: `${strike}스트라이크 ${ball}볼` }]
                })   
            }
        }
    }

    const onChangeInput = (e) => {
        console.log(answer)
        setValue(e.target.value)
    }
    
    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} ref={inputRef} value={value} onChange={onChangeInput} />
            </form>
            <div>시도: {tries.length}회</div>
            <ul>
                {
                    tries.map((v, idx) => {
                        return <Try key={`${idx+1}회차`} tryInfo={v}/>        
                    })
                }
            </ul>
        </>
    )
})


export default Baseball;