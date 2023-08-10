import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom"

const SingleTodo = () => {
    const {id}=useParams();
    console.log('id:', id)
    const[todo,setTodo]=useState({})
    const [statusShow,setStatusShow]=useState('')
    const navigate=useNavigate();

    useEffect(()=>{
        getTodos(id)
    },[id])

    const getTodos=(id)=>{
        axios.get(`http://localhost:8080/todos/${id}`)
        .then((res)=>{
          console.log(res.data)
          setTodo(res.data)
          setStatusShow(res.data.status)
        })
        .catch((err)=>{
          console.log(err.messaage)
        })
      }


      const{title}=todo;

  return (
    <div>
      <h3>{title}-{statusShow===true ? "True":"False" }</h3>
      <button onClick={()=>setStatusShow(!statusShow)}>Toggle Status</button>      
      <button onClick={()=>navigate(`/todo/${id}/edit`)}>Edit</button>
    </div>
  )
}

export default SingleTodo
