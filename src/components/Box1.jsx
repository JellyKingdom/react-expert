import React from "react";

const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "#01c49f",
    color: "white",
};

function Box1() {
    console.log("Box1 컴포넌트가 렌더링 되었습니다.");
    return <div style={style}>Box1</div>;
}

export default Box1;
