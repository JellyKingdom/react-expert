import { useDispatch, useSelector } from "react-redux";
import { minusOne, PLUS_ONE  } from "./redux/modules/counter";
import { MINUS_ONE } from "./redux/modules/counter";
import { plusOne } from "./redux/modules/counter";
import "./App.css";

function App() {

    //여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
    //useSelector
    const counter = useSelector((state) => {
        return state.counter;
    });

    //dispatch를 가져와보자
    const dispatch = useDispatch();

    console.log("counter", counter.number);
    return <>
            <div>현재카운트 : {counter.number}</div>
            <button onClick={() => {
                // + 1을 해주는 로직을 써주면 된다.
                // dispatch({
                //     type: PLUS_ONE,
                // });
                dispatch(plusOne());
            }}>+</button>
            <button onClick={() => {
                dispatch(minusOne());
            }}>-</button>
    </>;
}

export default App;


