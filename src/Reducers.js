import { createReducer } from "@reduxjs/toolkit";

const initalState= {
    c:0,
}

export const customReducer= createReducer(initalState,{
    increment:(state,action)=>{state.c+=1},
    incrementBy10:(state,action)=>{state.c+=action.payload},
    decrement:(state,action)=>{state.c-=1},
    decrementBy10:(state,action)=>{state.c-=action.payload},
})