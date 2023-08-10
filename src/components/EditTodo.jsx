import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom"

const EditTodo = () => {
    const {id}=useParams();
    console.log('id:', id);
    const navigate=useNavigate();
    const[title,setTitle]=useState('')
    useEffect(()=>{
        getTodos(id)
    },[id])

    const getTodos=(id)=>{
        axios.get(`http://localhost:8080/todos/${id}`)
        .then((res)=>{
          console.log(res.data)
          setTitle(res.data.title)
        })
        .catch((err)=>{
          console.log(err.messaage)
        })
      }

      const handleClick=()=>{
        axios.patch(`http://localhost:8080/todos/${id}`,{title:title})
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err)=>{
          console.log(err.messaage)
        })
        navigate('/')
      }
  return (
    <div>
      <input type="text" placeholder='Enter Todo' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <button onClick={handleClick}>Submit Todo</button>
    </div>
  )
}

export default EditTodo
