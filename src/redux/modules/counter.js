
//초기 상태 값
const initialState = {
    number: 0
};
//const [number, setNumber] = useState(0); 이렇게 작성했었음!

//Reducer : 'state에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

// input  : state와 action
const counter = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    }

}

export default counter;