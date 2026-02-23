import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"mydata",
    initialState:{
        value : 445
    }
})

export default slice.reducer;