import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  
  const idRef = useRef('');
  const pwRef = useRef('');

  // 화면이 랜더링 될때 어떤 작업을 하고 싶다! : useEffect!
  useEffect(()=> {
    // idRef.current.focus();
    pwRef.current.focus();
  },[])

    return (
        <>
          <div>
            아이디 : <input type="text" ref={idRef}/>
          </div>
          <div>
            비밀번호 : <input type="password" ref={pwRef}/>
          </div>
        </>
    );
}

export default App;
