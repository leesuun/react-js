import React, { PureComponent, useState } from "react";


class ResponseCheck extends PureComponent{
    state = {
        state: "waiting",
        message: "클릭해서 시작하세요.",
        result: [],
    }

    timeoutId;
    startTime;
    endTime;

    onClickScreen = () => {
        const { state, message, result } = this.state;
        console.log(result);
        
        if (state === "waiting") {
            this.setState({
                state: "ready",
                message: "초록색이 되면 클릭하세요."
            });
            this.timeoutId = setTimeout(() => { 
                this.setState({
                    state: "now",
                    message: "지금 클릭하세요."
                });
                this.startTime = new Date();
                
            },Math.floor(Math.random() * 1000) + 2000)
            
        } else if (state === "ready") {
            clearTimeout(this.timeoutId)
            this.setState({
                state: "waiting",
                message: "부정 클릭(재시작)"
            });           
        } else if (state === "now") {
            this.endTime = new Date();
            this.setState(prevState =>({
                state: "waiting",
                message: "클릭해서 시작하세요.",
                // 이전 배열에 push하는 작업
                result: [...prevState.result, this.endTime - this.startTime ],
            }));   
            
        }
        
    }

    onReset = () => {
        this.setState({
            result: []
        })
    }

    renderAverage = () => {
        const { result } = this.state;
        return result.length !== 0 && 
            <>
            <div>평균시간: {result.reduce((a, c) => a + c, 0) / result.length}ms</div>
            <button onClick={this.onReset}>리셋</button>
            </>
               
    }


    render() {
        const {state,message } = this.state;
        return (
            <>
                <div id="screen" className={state} onClick={this.onClickScreen}>
                    {message}
                </div>
                {this.renderAverage()}
                
                
            </>
        )
    }

}



export default ResponseCheck;