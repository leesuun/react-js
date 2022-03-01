import React from 'react';
import { Component } from 'react';
import NumberBaseball from '../numbers-baseball/baseball-class';
import RSP from '../RSP/rsp-class';
import Lotto from '../lotto/lotto-class';
import {Route, Routes, useLocation} from "react-router";

class GameMatcher extends Component {
  render() {
    console.log(this)
    let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
    console.log(urlSearchParams.get('page'));
    return (
      <Routes>
        <Route path="number-baseball" element={<NumberBaseball />} />
        <Route path="rock-scissors-paper" element={<RSP />} />
        <Route path="lotto-generator" element={<Lotto />} />
        <Route
          path="*"
          element={<div>
            일치하는 게임이 없습니다.
          </div>}
        />
      </Routes>
    );
  }
}

const WrappedComponent = (props) => {
  const location = useLocation()

  return <GameMatcher location={location} {...props} />
}

export default WrappedComponent;