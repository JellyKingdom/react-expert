import "./App.css";
import { useCallback, useState } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";


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

    // count를 초기화해주는 함수
    // 바뀐게 있나요?
    // box1이 props로 내려온 이 값을 바뀌었다고 생각했을까?
    // useCallback을 통해 함수 자체를 메모이제이션 해주어야 한다.
    // App.js가 처음에 렌더링 될 때 initCount 함수를 메모리 공간에 그대로 저장! 의존성 배열안에 아무것도 없기때문에([]) 끝까지 변하지않는다.
    //함수가 리렌더링 되더라도 변하지않고, 메모이제이션 되어있는 상태로 그대로 있음.
    const initCount = useCallback(() => {
        console.log(`${count}에서 0으로 변경되었습니다.`);
        //useCallback이 이 함수를 저장하는게 카운트가 0인 시점이다.
        //그리고 변하지 않기때문에 계속 0에서 0으로 변경되었습니다.가 찍힌다.
        //여기서 count를 찍고싶다면 의존성 배열안에 count를 넣어주자!
        setCount(0);
    },[count]);

    return <>
    <h3>카운트 예제입니다!</h3>
    <p> 현재 카운트 : {count}</p>
    <button onClick={onPlusButtonClickHandler}>+</button>
    <button onClick={onMinusButtonClickHandler}>-</button>
    <div style={{display:"flex", marginTop: "10px"}}>
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
    </div>
    </>;
}

export default App;


