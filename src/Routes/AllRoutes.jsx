import React from 'react'
import {Routes,Route} from "react-router-dom"
import Todo from '../components/Todo'
import SingleTodo from '../components/SingleTodo'
import EditTodo from '../components/EditTodo'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Todo/>} />
        <Route path='/todo/:id' element={<SingleTodo/>} />
        <Route path='/todo/:id/edit' element={<EditTodo/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
