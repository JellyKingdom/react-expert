import React from "react";
import { useNavigate } from "react-router-dom";

function Works() {
    const nav = useNavigate();
    return <div>Works<br/>
    <button onClick={() => {
        nav('/');
    }}>Home으로 이동</button>
    </div>;
}

export default Works;
