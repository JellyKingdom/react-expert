// 중앙 데이터 관리소(store)를 설정하는 부분
import { configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import {createStore} from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";

//ASIS : 일반 리듀서
// const rootReducer = combineReducers({
//     counter,
// });
// const store = createStore(rootReducer);

// TODO : Redux Toolkit
const store = configureStore({
    reducer: {
        counter : counter,
    }
});

export default store;