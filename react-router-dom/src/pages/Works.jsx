import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Works() {
    const nav = useNavigate();
    const location = useLocation();

    console.log('location :',location);

    return <div>Works<br/>
    <button onClick={() => {
        nav('/');
    }}>Home으로 이동</button>
    </div>;
}

export default Works;
