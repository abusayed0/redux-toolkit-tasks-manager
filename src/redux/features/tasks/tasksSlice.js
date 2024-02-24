import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
tasks: []
};
const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask : (state, {payload}) => {
            state.tasks.push({
                ...payload,
                id: nanoid(),
                status: "pending"
            });
        },
        deleteTask : (state, {payload}) => {
            state.tasks.filter(item => item.id !== payload.id)
        },
    },

});

export const {addTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;