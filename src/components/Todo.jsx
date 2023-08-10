import React, { useEffect } from 'react'
import Todoinput from './TodoInput'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTodoSuccessAction, todoFailureAction, todoRequestAction } from '../Redux/action'

const Todo = () => {

  const navigate=useNavigate();

  const {todos,isLoading,isError,errorMessage}=useSelector(store=>{
    return{
      todos:store.todos,
      isLoading:store.isLoading,
      isError:store.isError,
      errorMessage:store.errorMessage
    }
  },shallowEqual)

  console.log('toto render')
  const dispatch=useDispatch();
  useEffect(()=>{
    getTodos()
  },[])

  const getTodos=()=>{
    dispatch(todoRequestAction())
    axios.get("http://localhost:8080/todos")
    .then((res)=>{
      dispatch(getTodoSuccessAction(res.data))
      console.log(res.data)
    })
    .catch((err)=>{
      dispatch(todoFailureAction(err.message))
      console.log(err.messaage)
    })
  }

  const handleClick=(id)=>{
    navigate(`/todo/${id}`)
  }

  const handleDelete=(id)=>{
    axios.delete(`http://localhost:8080/todos/${id}`)
    .then((res)=>{
      // dispatch(getTodoSuccessAction(res.data))
      console.log(res.data)
    })
    .catch((err)=>{
      dispatch(todoFailureAction(err.message))
      console.log(err.messaage)
    })
  }
  
  return (
    <div>
      <Todoinput/>
      {isError && <h3>{errorMessage}</h3>}
      {todos.map((el)=>(
        <div key={el.id} >
          <h3 onClick={()=>handleClick(el.id)}>{el.title} - {el.status===true? "True":"False" }</h3>
        <button onClick={()=>handleDelete(el.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Todo
