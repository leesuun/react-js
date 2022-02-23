import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Ball from "./Ball"

const getNumbers = () => {
    console.log("getNumbers")
    const candidate = Array(45).fill(0).map((v, idx) => idx + 1);
    const shuffle = [];
    while (shuffle.length < 7) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0]); 
    }
    const lottoNumbers = shuffle.slice(0, 6).sort((a, b) => a - b);
    const bonusNumber = shuffle[shuffle.length - 1];
    return [...lottoNumbers, bonusNumber]
    
}

const Lotto = () => {

    const lottoNumbers = useMemo(() => { return getNumbers() }, [winBalls]);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    useEffect(() => {
        console.log("useEffect")
        console.log(winNumbers)
        runTimeouts();
        return () => {
            timeouts.current.forEach((v)=>clearTimeout(v))
        }
    }, [timeouts.current])
    
    const runTimeouts = () => {
        console.log("runTimeouts")
         for (let i = 0; i < winNumbers.length - 1; i++){
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevWinBall) => {
                    return [...prevWinBall, winNumbers[i]]
                })
            }, (i+1)*1000)
        }
        timeouts.current[6] =setTimeout(() => {
            setBonus(winNumbers[6])
            setRedo(true)
        }, 7000)
    }

    const onClickRedo = useCallback(() => {
        console.log("onClickRedo")
        console.log(winNumbers)
        setWinNumbers(getNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false)
        // timeouts.current = value 작업은 timeouts.current가 바뀌는 작업이다.
        timeouts.current = [];
    },[winNumbers])

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
            {winBalls.map((v) => <Ball key={v} number={v} />)}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus}  />}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    );
}
    

export default Lotto