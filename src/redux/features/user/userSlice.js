import { createSlice } from "@reduxjs/toolkit";
const initialState = {
        name: "jack",
        email: "jack@gmail.com"
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        
    }
})

export default userSlice.reducer;