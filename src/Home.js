import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

export const Home = () => {
    const dispatch=useDispatch();
    const data=useSelector(state=>state.myReducer)
    const c=data.c
    const increment=()=>{
    dispatch({type:"increment"})    
    }
    const decrement=()=>{
        dispatch({type:"decrement"})    
    }
    const incrementBy10=()=>{
        dispatch({type:"incrementBy10",
                  payload:10,  
        })    
    }
    const decrementBy10=()=>{
        dispatch({type:"decrementBy10",
                  payload:10,  
        })    
    }
  return (
    <div>
        <h1>{c}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={incrementBy10}>IncrementBy10</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={decrementBy10}>DecrementBy10</button>
    </div>
  )
}
