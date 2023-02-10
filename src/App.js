import "./App.css";
import { useState } from "react";


function App() {
    console.log('App컴포넌트가 렌더링 되었습니다.');

    const [count, setCount] = useState(0);

    // 1 증가
    const onPlusButtonClickHandler = () => {
        setCount(count + 1);
    } 

    // 1 감소
    const onMinusButtonClickHandler = () => {
        setCount(count - 1);
    }
    return <>
    <h3>카운트 예제입니다!</h3>
    <p> 현재 카운트 : {count}</p>
    <button onClick={onPlusButtonClickHandler}>+</button>
    <button onClick={onMinusButtonClickHandler}>-</button>
    </>;
}

export default App;


