import React, { useState,useRef } from "react";




const ResponseCheck = () => {
    const [state, setState] = useState("waiting");
    const [message, setMessage] = useState("클릭해서 시작하세요.");
    const [result, setResult] = useState([]);

    const timeoutId = useRef(null);
    const startTime = useRef();
    const endTime = useRef();
    const onClickScreen = () => {
         
        if (state === "waiting") {
            setState("ready");
            setMessage("초록색이 되면 클릭하세요.");

            timeoutId.current = setTimeout(() => {
                setState("now");
                setMessage("지금 클릭하세요.");
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000)
            
        } else if (state === "ready") {
            clearTimeout(timeoutId.current)
            setState("waiting");
            setMessage("부정 클릭(재시작)");
        } else if (state === "now") {
            endTime.current = new Date();
            setState("waiting");
            setMessage("클릭해서 시작하세요.")
            setResult(prevState => {return [...prevState, endTime.current - startTime.current] });
            // setResult(endTime - startTime)
        }
    }

    const onReset = () => setResult([]);
    
    const renderAverage = () => {
        return result.length !== 0 && 
            <>
                <div>평균시간: {result.reduce((a, c) => a + c, 0) / result.length}ms</div>
                <button onClick={onReset}>리셋</button>
            </>
    }

    return (
         <>
            <div id="screen" className={state} onClick={onClickScreen}>
                {message}
            </div>
            {renderAverage()}     
        </>
    )
}




export default ResponseCheck;