import "./App.css";
import HeavyComponent from "./components/HeavyComponent";

// heavy work -> 엄청 무거운 작업!
function App() {
    return <>
        <nav style={{
            backgroundColor: 'yello',
            marginBottom: '30px',
        }}>네비게이션 바</nav>
        <HeavyComponent/>
        <footer style={{
            backgroundColor: 'green',
            marginBottom: '30px',
        }}>푸터 영역입니당!</footer>

    </>;
}

export default App;


