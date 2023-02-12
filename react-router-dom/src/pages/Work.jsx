import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/data";

function Work() {

    const params = useParams();

    // 어떤 todo인지 찾아보기
    const foundData = data.find((item) => {  
        console.log('item.id',item.id);
        console.log('params.id',params.id);
        console.log('----------------');
        return item.id === parseInt(params.id);    //== 동등연산자, === 일치 연산자
    });

    console.log("foundData",foundData);

    return <div>
        <h3>할 일: {foundData.todo}</h3>
    </div>;
}

export default Work;
