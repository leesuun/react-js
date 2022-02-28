import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NumberBaseball from "../numbers-baseball/baseball-class";
import Rsp from "../RSP/rsp-class";
import Lotto from "../lotto/lotto-class";

 class GameMatcher extends Component{
     render() {
        //  console.log(location)   
        return (
            <>
                <NumberBaseball />
                <Rsp/>
                <Lotto />
            </>
        )
    }
}


export default GameMatcher;