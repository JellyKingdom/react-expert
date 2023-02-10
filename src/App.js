import { useState } from "react";
import styled from "styled-components";
import "./App.css";

//React Hooks - useState

//가장 기본적인 hook
//함수형 컴포넌트 내에서 가변적인 상태를 갖게 함
//카운터, Todolist


function App() {

  const [number, setNumber] = useState(0);
    return (
        <>
        <span>UseState</span>
        <div>Number State : {number}</div>
        <button onClick={() => {
          //setNumber(number + 1);
          //아래에 함수형 컴포넌트로 표현
          setNumber((currentState) => {
            return currentState + 1; 
          })
        }}>누르면 up</button>
        </>
    );
}

//default style을 제거하는 방식: CSS Reset

export default App;
