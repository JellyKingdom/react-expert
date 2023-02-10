import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./App.css";

const style = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
};

function App() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    //렌더링이 계속 일어나기때문에 숫자가 계속 +1씩 늘어난다.
    const plusStateCountButtonHandler = () => {
      setCount(count + 1);
    }


    //렌더링을 일으키지않기때문에 화면속에서 변화는 없지만 콘솔로 값이 변하는건 볼 수 있다.
    const plusRefCountButtonHandler = () => {
      countRef.current++;
      console.log(countRef.current);
    }

    return (
        <>
            <div style={style}>
                state 영역입니다. {count} <br />
                <button onClick={plusStateCountButtonHandler}>state 증가</button>
            </div>
            <div style={style}>
                ref 영역입니다. {countRef.current} <br />
                <button onClick={plusRefCountButtonHandler}>ref 증가</button>
            </div>
        </>
    );
}

export default App;
