import styled from 'styled-components';
import './App.css';

//styled.뒤 에는 항상 html요소가 온다!
//``안에는 css문법을 써준다! 
const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 20px;
`;

const StP = styled.p`
  color: blue;
`

function App() {
  return (
    <>
      <StBox>
        <StP>나는 p태그 입니다.</StP>
      </StBox>
    </>
  );
}

export default App;
