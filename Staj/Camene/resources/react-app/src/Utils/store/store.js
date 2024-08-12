import { configureStore } from "@reduxjs/toolkit";
import projectTypeSlice from "../../features/projectType/projectTypeSlice";

export const store = configureStore({
    reducer: {
        projectType: projectTypeSlice,
    },
});

export default store;
