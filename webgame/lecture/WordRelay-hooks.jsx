import React from "react";
const { useState } = React;

const WordRelay = () => {
    
    const [word, setWord] = useState("이수운");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputEl = React.useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setResult('딩동댕');
            setWord(value);
            inputEl.current.focus();
        } else {
            setResult('땡');
            inputEl.current.focus();
        }
        setValue('');
    }
    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputEl} value={value} onChange={ e => setValue(e.currentTarget.value)} />
                <button>제출</button>
            </form>
            <div>{result}</div>
        </>
    )
}


export default WordRelay;