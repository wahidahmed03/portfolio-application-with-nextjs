"use client";
import { configureStore } from '@reduxjs/toolkit';
import { homeSidebarReducer } from './HomeSidebarSlice'; 
import { ThemeColorChangeReducer } from "./ThemeColorSlice";


const store = configureStore({
    reducer: {
        homeSidebar: homeSidebarReducer ,
        themeColor: ThemeColorChangeReducer,
    }
});

export default store;
