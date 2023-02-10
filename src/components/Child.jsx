import React, { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

const style = {
    color: 'red',
    fontWeight: '900',
}

function Child() {

    //props로 내려준 값을 이용하는게 아니라 context를 이용해서 값을 받아왔다!!
    //주의사항: useContext를 사용할 때, Provider에서 제공한 value가 달라진다면
    //useContext를 사용하고있는 모든 컴포넌트가 리렌더링 된다!!!!
    //따라서 value부분을 항상 신경써줘야 한다.
    const data = useContext(FamilyContext);
    console.log('data',data)
    return <div>
        나는 이 집안의 막내예요! <br/>
        할아버지가 우리 집 이름은 <span style={style}>{data.houseName}</span>라고 하셨어요.<br/>
        게다가 용돈고 <span style={style}>{data.pocketMoney}</span>원 만큼이나 주셨어요.

    </div>;
}

export default Child;
