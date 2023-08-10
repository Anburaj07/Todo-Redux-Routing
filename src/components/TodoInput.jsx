import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTodoSuccessAction, postTodoSuccessAction, todoFailureAction, todoRequestAction } from '../Redux/action';

const Todoinput = () => {
    const[title,setTitle]=useState('')

    const dispatch=useDispatch();

    const handleAdd=()=>{
        const newTodo={
            title,
            status:false
        };
        console.log('newTodo:', newTodo)  
        postTodos(newTodo)       
    }

    const postTodos=(newTodo)=>{
        dispatch(todoRequestAction())
        axios.post("http://localhost:8080/todos",newTodo)
        .then((res)=>{
            dispatch(postTodoSuccessAction(res.data))
        }).catch((err)=>{
            dispatch(todoFailureAction(err.message))
            console.log("error")
        })
    }

    

  return (
    <div>
      <input type="text" placeholder='Enter Todo' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  )
}

export default Todoinput
