import styled from "styled-components";
import "./App.css";

//styled.뒤 에는 항상 html요소가 온다!
//``안에는 css문법을 써준다!
const StBox = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid
        ${(props) => {
            return props.borderColor;
        }};
    margin: 20px;
`;

const StContainer = styled.div`
    display: flex;
`;

function App() {
    return (
        <>
            <StContainer>
                <StBox borderColor="red">
                    빨간박스
                </StBox>
                <StBox borderColor="blue">
                    파란박스
                </StBox>
                <StBox borderColor="green">
                    초록박스
                </StBox>
            </StContainer>
        </>
    );
}

//props : 부모 컴포넌트 -> 자식 컴포넌트

export default App;
