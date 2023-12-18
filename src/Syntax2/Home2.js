import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
export const Home2 = () => {
  const dispatch=useDispatch();
    const data=useSelector(state=>state.appReducer)
    const c=data.c
    const increment=()=>{
    dispatch({type:"increment"})    
    }
    const decrement=()=>{
        dispatch({type:"decrement"})    
    }
  return (
    <div>
        <h1>{c}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
  
}
