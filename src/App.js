import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counter";

const App = () => {
  // Store에 있는 counter 모듈 state 조회하기
  const counter = useSelector((state) => state.counter.number);
  
  const dispatch = useDispatch();

  const plus = () => {
    dispatch(addNumber(1));
  }

  const minus = () => {
    dispatch(minusNumber(1));
  }

  return (
    <>
    <div>
      {counter} <br/>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
    </>
    );
};

export default App;
