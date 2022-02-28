import React, { Component } from "react";
import { BrowserRouter, HashRouter, Link, Route, Routes } from "react-router-dom";
import GameMatcher from "./GameMatcher"


const Games = ({ match, location, history }) => {
  console.log(match,location,history)
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/number-baseball">숫자야구</Link>
        <br />
        <Link to="/game/rsp">가위바위보</Link>
        <br />
        <Link to="/game/lotto">로또</Link>
      </div>
      <Routes>
        <Route path="/game/:name" element={<GameMatcher/>} />
      </Routes>
    </BrowserRouter>
  )
}


export default Games;