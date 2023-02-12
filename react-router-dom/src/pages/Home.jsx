import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {
    const nav = useNavigate();

    return <div>Home <br/>
    <button onClick={() => {
        nav("/works");
    }}>works로 이동</button>
    </div>;
}

export default Home;
