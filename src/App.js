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
          //아래의 3개의 setNumber(number + 1)은 +1만 된다.
          //배치성으로 처리가 된다.
          //배치업데이트!
          //setNumber(number + 1);
          //setNumber(number + 1);
          //setNumber(number + 1);

          //렌더링이 잦다 -> 성능에 이슈가 있다.
          //불필요한 렌더링을 피하기위해 요청사항을 모아서 한번에 처리
          
          //아래에 함수형 컴포넌트로 표현
          // 3개의 함수형 컴포넌트는 +3이 된다.
          //명령을 모아서 순차적으로 하나씩 실행시킨다!
          setNumber((currentState) => currentState + 1);
          setNumber((currentState) => currentState + 1);
          setNumber((currentState) => currentState + 1);
        }}>누르면 up</button>
        </>
    );
}

//default style을 제거하는 방식: CSS Reset

export default App;
