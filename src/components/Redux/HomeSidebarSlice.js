"use client";

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isHomeSideBar: true
};

const HomeSidebarSlice = createSlice({
 name: "HomeSidebarSlice",
 initialState,
 reducers: {
 ChangeHomeSidebar: (state) => {
  state.isHomeSideBar = !state.isHomeSideBar;
}
}
});

export const { ChangeHomeSidebar } = HomeSidebarSlice.actions;
export const homeSidebarReducer = HomeSidebarSlice.reducer;