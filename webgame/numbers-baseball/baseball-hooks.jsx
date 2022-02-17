import React, { memo, useState,useRef } from "react";
import Try from "./try"


function getNumbers() {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i++){
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}


const Baseball = memo(() => {
    const [result, setResult] = useState("");
    const [value, setValue] = useState("");
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);
    const inputRef = useRef(null);
     

    const resetGame = () => {
        setTimeout(() => {
            alert("게임을 다시 시작합니다.!");
            setValue("");
            setResult("");
            setAnswer(getNumbers());
            setTries([])
        }, 1000)
        inputRef.current.focus();
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join("")) {
            setResult("홈런!");
            setTries((prevTries) => {
                return [...prevTries, {try: value, result:"홈런"}]
            })
                
            resetGame();
            
        } else {
            const answerArray = value.split("").map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                setResult(`10회 이상 실패!! 답은 ${answer.join(",")}입니다 `)
                resetGame();
            } else {
                for (let i = 0; i < 4; i++){
                    if (answerArray[i] === answer[i]) {
                        strike++;
                    } else if (answer.includes(answerArray[i])) {
                        ball++;
                    }
                }
                setTries(prevTries => {
                    return [...prevTries, {try: value, result:  ` ${strike} 스트라이크 ${ball} 볼` }] 
                })           
            }
        }
        inputRef.current.focus();
        
    }

    const onChangeInput = (e) => {
        console.log(answer)
        setValue(e.target.value)
    }
        
    return( 
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} maxLength={4} value={value} onChange={onChangeInput} />
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((v,idx)=>{
                    return (
                        <Try key={`${idx +1}차 시도 :`} tryInfo={v} />
                    )
                }) }
                
                </ul>
        </>
                
        )
    
})

export default Baseball;