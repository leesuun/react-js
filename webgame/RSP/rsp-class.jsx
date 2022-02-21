import React, { Component } from "react";

const rspCoords = {
    Rock: "-142px",
    Paper: "0px",
    Scissors: "-284px"
}

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};


class Rsp extends Component{
    state = {
        result: "",
        imgCoord: "0px",
        score: 0
    }
    intervalId;
    componentDidMount() {
        // 비동기 함수에서 외부 변수 참조시 클로져 문제 발생
        // const { imgCoord } = this.state; //xxx
        // 위코드처럼 imgCoord 선언시 아래 비동기 함수에서 처음 setting된 변수를 계속 참조하게됨
        
        this.intervalId = setInterval(() => {
            const { imgCoord } = this.state;
            if (imgCoord === rspCoords.Rock) {
                console.log("바위")
                this.setState({
                    imgCoord: rspCoords.Paper
                })
                
            } else if (imgCoord === rspCoords.Paper) {
                console.log("보")
                this.setState({
                    imgCoord: rspCoords.Scissors
                })
                
                
            } else if (imgCoord === rspCoords.Scissors) {
                console.log("가위")
                this.setState({
                    imgCoord: rspCoords.Rock
                })
                
            }
        },1000)
        
    }
    componentWillUnMount(){
        clearInterval(this.intervalId)
        console.log("삭제")
    }
    componentDidUpdate() {
        console.log("리랜더")
    }


    onClickBtn = (rsp) => {
        
    }

    render() {
        const { imgCoord, result, score } = this.state;
        return (
        <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
                <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
        
        )
    }
}

export default Rsp;