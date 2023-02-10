import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  
  const idRef = useRef('');
  const pwRef = useRef('');

  const [id,setId] = useState('');

  // 화면이 랜더링 될 때 어떤 작업을 하고 싶다! : useEffect!
  useEffect(()=> {
    idRef.current.focus();
  },[])

  // id라는 state가 바뀔때마다 수행이 되어야 하기때문에 id값이 dependancy에 들어간다.
  useEffect(()=>{
    if(id.length >= 10){
      pwRef.current.focus();
    }
  },[id])

  //리액트에서 state -> 배치 업데이트
  //set을 바로 했는데 바로 반영되는게 아니라 한박자 늦음.
  //그렇기때문에 useEffect를 써줘서 바로 반영되게 만든다.
  //useEffect를 안쓰면 11번째에서 pw 인풋창이 focus된다.
  // if(id.length === 10){
  //   pwRef.current.focus();}

    return (
        <>
          <div>
            아이디 : <input type="text" value={id} ref={idRef} onChange={(e) => {setId(e.target.value)}}/>
          </div>
          <div>
            비밀번호 : <input type="password" ref={pwRef}/>
          </div>
        </>
    );
}

export default App;
