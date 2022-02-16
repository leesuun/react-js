import React, { Component } from "react";
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

class Baseball extends Component{
    state = {
        result: "",
        value: "",
        answer: getNumbers(),
        tries: []
    }

    resetGame = () => {
        setTimeout(() => {
            alert("게임을 다시 시작합니다.!");
            this.setState({
                value: "",
                result: "",
                answer: getNumbers(),
                tries: [],
            });
        },1000)
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        const { value, answer, tries } = this.state;
        if (value === answer.join("")) {
            this.setState({
                result: "홈런",
                tries: [...tries, {try: value, result:"홈런"}]
            })
            this.resetGame();
            
        } else {
            const answerArray = value.split("").map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                this.setState({
                    result: `10회 이상 실패! 답은 ${answer.join(",")}입니다`
                })
            this.resetGame();
            } else {
                for (let i = 0; i < 4; i++){
                    if (answerArray[i] === answer[i]) {
                        strike++;
                    } else if (answer.includes(answerArray[i])) {
                        ball++;
                    }
                }
                this.setState(prevState => {
                    return {
                        tries: [...prevState, { try: value, result: ` ${strike} 스트라이크 ${ball} 볼` }],
                        value: ""

                    }
                })
            }
        }
        
    }

    onChangeInput = (e) => {
        console.log(this.state.answer)
        this.setState({
            value: e.target.value,
        })
    }
    render() {
        const { value, answer, tries, result } = this.state;
        return(
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangeInput} />
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
    }
}

export default Baseball;