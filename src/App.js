import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

function App() {

  const [value, setValue] = useState('');
  //useEffct
  //렌더링 될 때, 특정한 작업을 수행해야할 때 설정하는 훅

  // 컴포넌트가 화면에 보여졌을 때
  // 컴포넌트가 화면에서 사라졌을 때(return)

  //1.input에 값을 입력
  //2. value, 즉 state가 변경
  //3. state가 바뀌었기때문에 App 컴포넌트가 리렌더링
  //4. 리렌더링 -> useEffect()
  
  //Dependancy Array
  //이 배열에 값을 넣으면, 그 값이 바뀔 때만 useEffect를 실행한다.

  //clean up
  useEffect(() => {
    console.log(`hello, useEffect : ${value}`);

    return () => {
      // 컴포넌트가 사라질때 동작
      console.log('나 사라져요 ..ㅠ');
    }
  }, [value]);

    return (
        <>
        <span>UseEffect</span>
        <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        />
        </>
    );
}


export default App;
