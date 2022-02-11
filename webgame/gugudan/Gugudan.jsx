import React from "react";
const {useState, useRef }  = React;

const Gugudan = () => {
                const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
                const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
                const [value, setValue] = useState("");
                const [result, setResult] = useState("");
                const inputRef = useRef(null);

                const onChange = (e) => {
                    setValue(e.target.value);
                };

                const onSubmit = (e) => {
                    e.preventDefault();
                    if (first * second === parseInt(value)) {
                        setResult(`${first} * ${second}=${value} 정답입니다.`);
                        setFirst(Math.ceil(Math.random() * 9));
                        setSecond(Math.ceil(Math.random() * 9));
                        setValue("");
                        inputRef.current.focus();
                    } else {
                        setResult("오답입니다.");
                        setValue("");
                        inputRef.current.focus();
                    }
                };

                return (
                    <>
                        <div>
                            {first} 곱하기 {second}는?
                        </div>
                        <form onSubmit={onSubmit}>
                            <input
                                ref={inputRef}
                                type="number"
                                value={value}
                                onChange={onChange}
                            />
                            <button type="submit">제출</button>
                        </form>
                        <div id="result">{result}</div>
                    </>
                );
};

/*
<> React.Fragment</>
*/
export default Gugudan