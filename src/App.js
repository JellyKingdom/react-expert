import styled from "styled-components";
import "./App.css";
import TestPage from "./components/TestPage";
import GlobalStyle from "./GlobalStyle";

// 전역 스타일링: 프로젝트 전체를 아우르는 스타일!
//styled-components: 해당 컴포넌트 내에서만!

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

//박스의 색
const boxList = ['red','blue','green','black'];

// 색을 넣으면 이름을 반환
const getBoxName = (color) => {
  switch(color){
    case 'red' :
      return '빨간 박스';
    case 'green' :
      return '초록 박스';
    case 'blue' :
      return '파란 박스';
    default:
      return '검정 박스'
  }
}

function App() {
    return (
        <>
            {/* <StContainer>
              {boxList.map((box)=>{
                return <StBox borderColor={box}>{getBoxName(box)}</StBox>
              })}
            </StContainer> */}
            <GlobalStyle />
            <TestPage
            title="제목입니다."
            contents="내용입니다."
            />
        </>
    );
}

//props : 부모 컴포넌트 -> 자식 컴포넌트

export default App;
