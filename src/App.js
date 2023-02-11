import { useDispatch, useSelector } from "react-redux";
import { minusN, minusOne } from "./redux/modules/counter";
import { plusOne } from "./redux/modules/counter";
import "./App.css";
import { useEffect, useState } from "react";
import { plusN } from "./redux/modules/counter";


function App() {
    const [number, setNumber] = useState(0);

    //여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
    //useSelector
    const counter = useSelector((state) => {
        return state.counter;
    });

    useEffect(() => {
        console.log('number =>',number);
    },[number])

    //dispatch를 가져와보자
    const dispatch = useDispatch();

    return <>
            <div>현재카운트 : {counter.number}</div>
            <div>
                <input type="number"
                value = {number}
                onChange={(e) => {
                    const {value} = e.target;
                    setNumber(+value)}}/>
            </div>
            <button onClick={() => {
                // + 1을 해주는 로직을 써주면 된다.
                // dispatch({
                //     type: PLUS_ONE,
                // });
                // dispatch(plusOne());
                dispatch(plusN(number));
            }}>+</button>
            <button onClick={() => {
                // dispatch(minusOne());
                dispatch(minusN(number));
            }}>-</button>
    </>;
}

export default App;


