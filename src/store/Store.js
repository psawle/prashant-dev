import { configureStore } from "@reduxjs/toolkit";

import MyReducer from "../feature/MySlice"

const store = configureStore({
    reducer : {
        myData:MyReducer
    }
});

export default store;