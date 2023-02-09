import styled from 'styled-components';
import './App.css';

//styled.뒤 에는 항상 html요소가 온다!
//``안에는 css문법을 써준다! 
const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => {
    return props.borderColor;
    }};
  background-color: ${props => props.backgroundColor};
  margin: 20px;
`;

function App() {
  return (
    <>
      <StBox borderColor="red" backgroundColor="yellow">
        빨간박스
      </StBox>
      <StBox borderColor="blue" backgroundColor="red">
        파란박스
      </StBox>
      <StBox borderColor="green" backgroundColor="blue">
        초록박스
      </StBox>
    </>
  );
}

//props : 부모 컴포넌트 -> 자식 컴포넌트

export default App;
