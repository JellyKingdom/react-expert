import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  //ref : reference
  const ref = useRef('초기값');
  // key는 current, value는 여기에 설정해준 '초기값'
  console.log('ref',ref);

  ref.current = '변경값';
  console.log('ref2',ref)

  //이렇게 설정된 ref값은 컴포넌트가 계속해서 렌더링 되어도 unmount전까지 값을 유지한다.

  // state는 리렌더링이 꼭 필요한 값을 다룰 때 쓰면 된다.
  // ref는 리렌더링을 발생시키지 않는 값을 저장할 때 사용한다.
    return (
        <>
          <div>useRef</div>
        </>
    );
}


export default App;
