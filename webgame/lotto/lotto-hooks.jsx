import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Ball from "./Ball"

function getWinNumbers() {
    console.log("getWinNumbers")
    const candidate = Array(45).fill().map((v, idx) => idx + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}


const Lotto = () => {
    // useMemo의 사용으로 hooks가 getWinNumbers의 값을 기억한다.(함수 실행 결과값 기억)
    // 렌더링시 함수 재실행 x
    const lottoNumbers = useMemo(() => getWinNumbers(), [winBalls]);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);

    const timeouts = useRef([]);

    useEffect(() => {
        console.log("useEffect")
        runTimeouts();
        return () => {
            // componentWillUnmount
            timeouts.current.forEach((v)=> clearInterval(v))
        }
        // input이 빈배열이면 componentDidMount와 같다.
        // 배열에 요소가 있으면 componentDidMount와 componentDidUpdate 둘 다 수행
        // winBalls.length === 0 못씀 (componentDidMount와 componentDidUpdate 둘 다 수행하므로)
    } , [timeouts.current])


    const runTimeouts = () => {
        console.log(winNumbers)
        for (let i = 0; i < winNumbers.length - 1; i++){
            // timeouts.current[i] = value 작업은 timeouts.current가 바뀌는 작업이 아니다.
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevWinBalls) => {
                    return [...prevWinBalls, winNumbers[i]]
                    
                })
            },
            (i+1)* 1000 )
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
    }

    // useCallback 사용시 렌더링 시에도 함수가 새롭게 생성되는것을 방지한다.(기억,캐싱)
    const onClickRedo = useCallback(() => {
        console.log("onClickRedo")
        console.log(winNumbers)
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false)
        // timeouts.current = value 작업은 timeouts.current가 바뀌는 작업이다.
        timeouts.current = [];
    }, [winNumbers]);


    
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

export default Lotto;
