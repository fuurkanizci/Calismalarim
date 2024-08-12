import { createSlice } from "@reduxjs/toolkit";

export const projectTypeSlice = createSlice({
    name: "imageState",
    initialState: {
        value: 1,
    },
    reducers: {
        changeValue: (state, actions) => {
            state.value = actions.payload;
        },
    },
});

export const { changeValue } = projectTypeSlice.actions;

export const initalValue = (state) => state.value;

export default projectTypeSlice.reducer;
