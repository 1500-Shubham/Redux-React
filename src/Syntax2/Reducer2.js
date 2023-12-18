import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
const initialState = {
 c:0
}
// export const appReducer= (state = initialState, action) => {
    export function appReducer (state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case "increment" : return {...state, c:state.c+1}
    case "decrement":  return {...state, c:state.c-1}
    default:
      return state
  }
}

const rootReducer = combineReducers({
    appReducer
});
 
export default rootReducer;