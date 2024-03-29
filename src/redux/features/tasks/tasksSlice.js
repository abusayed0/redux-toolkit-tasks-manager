import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    tasks: [],
    userTasks: [],
};
const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            state.tasks.push({
                ...payload,
                id: nanoid(),
                status: "pending"
            });
        },
        deleteTask: (state, { payload }) => {

            const restTasks = state.tasks.filter(item => item.id !== payload);
            state.tasks = restTasks;

        },
        changeStatus: (state, { payload }) => {
            const target = state.tasks.find(item => item.id === payload);
            // console.log(target.status);
            if (target.status === "pending") {
                target.status = "onGoing";
            }

            else if (target.status === "onGoing") {

                target.status = "done";
            }
            else {
                target.status = "archive";
            }
        },
        addUserTask: (state, { payload }) => {
            // console.log(payload, "payload");
            state.userTasks = state.tasks.filter(item => item.assignTo === payload && item.status !== "done" && item.status !== "archive");
        },
        markAsDone: (state, { payload }) => {
            const target = state.tasks.find(item => item.id === payload);
            target.status = "done"
        },
        editTask: (state, { payload }) => {
            
            let target = state.tasks.find(item => item.id === payload.id);
            
            target.title = payload.title;
            target.description = payload.description;
            target.description = payload.description;
            target.priority = payload.priority;
            target.status = payload.status;
            target.deadline = payload.deadline;

        }
    },

});

export const { addTask, deleteTask, changeStatus, addUserTask, markAsDone, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;