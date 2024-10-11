"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bgColor: "bg-blue-500",
    bgHoverColor :"hover:bg-blue-200/30",
    textColor:"text-blue-500",
    borderColor:"border-blue-500",
    themeSecandaryColor :"bg-blue-500/20"
}

const ThemeColorSlice = createSlice({
    name:"themeColor",
    initialState,
    reducers :{
        changeBgColor: (state,action) =>{
            state.bgColor = action.payload
        },
        changeTextColor : (state,action)=>{
            state.textColor = action.payload
        },
        changeBorderColor :(state,action)=>{
            state.borderColor = action.payload
        },
        changebgHoverColor :(state,action)=>{
            state.bgHoverColor = action.payload
        },
        changethemeSecandaryColor :(state,action)=>{
            state.themeSecandaryColor = action.payload
        }
    }
})

export const {changeBgColor, changeTextColor, changeBorderColor ,changebgHoverColor,changethemeSecandaryColor } = ThemeColorSlice.actions
export const ThemeColorChangeReducer = ThemeColorSlice.reducer