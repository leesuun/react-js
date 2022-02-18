import React, { Component } from "react";

class ResponseCheck extends Component{
    constructor(props) {
        super(props)
    }
    state = {
            state: "waiting",
            message: "클릭해서 시작하세요.",
            result: [],
    }

    timeoutId;
    startTime;
    endTime;

    // shouldComponentUpdate(nextProps){
    //     return this.props.result !== nextProps.result
    // }

    onClickScreen = () => {
        const { state, message, result } = this.state;
        
        if (state === "waiting") {
            this.setState({
                state: "ready",
                message: "초록색이 되면 클릭하세요.",
            })
            this.timeoutId = setTimeout(() => {
                this.setState({
                    state: "now",
                    message: "지금 클릭하세요.",
                })
            this.startTime = new Date();
            }, Math.floor(Math.random() * 1000 + 2000))
        } else if (state === "ready") {
            clearTimeout(this.timeoutId);
            this.setState({
                state: "waiting",
                message: "너무 성급합니다.(재시도)",
            })
            
        } else if (state === "now") {
            this.endTime = new Date();
            this.setState(prevState => ({
                state: "waiting",
                message: "클릭해서 시작하세요.",
                result: [...prevState.result, this.endTime - this.startTime]
            }))
        }
        
    }
    renderAverage = () => {
        const { result } = this.state;
        return !result.length ? 0 : result.reduce((acc, curr) => acc + curr, 0) / result.length
    }


    render() {
        const {state, message, result} = this.state
        return (
            <>
                <div id="screen" className={state} onClick={this.onClickScreen}>
                    {message}
                </div>
                <ul>
                    <div>평균시간: {`${this.renderAverage()}ms`}</div>
                    {result.map((v, idx) => {
                        return (
                            <li key={`${idx+1}차 시도`}>{idx+1}번 : {v}ms</li>
                        )
                    })}
                </ul>
            </>
        )
    }

}



export default ResponseCheck;