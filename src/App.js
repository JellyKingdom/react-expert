import { useSelector } from "react-redux";
import "./App.css";

function App() {

    //여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
    //useSelector
    const counter = useSelector((state) => {
        return state.counter;
    });

    console.log("counter", counter.number);
    return <>
        Redux!
    </>;
}

export default App;


