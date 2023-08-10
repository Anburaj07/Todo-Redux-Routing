import {TODO_GET_SUCCESS,TODO_POST_SUCCESS, TODO_FAILURE, TODO_REQUEST,} from "./actionTypes"

export const todoRequestAction=()=>{
    return {type:TODO_REQUEST}
}
export const getTodoSuccessAction=(payload)=>{
    return {type:TODO_GET_SUCCESS,payload}
}
export const todoFailureAction=(payload)=>{
    return {type:TODO_FAILURE,payload}
}


export const postTodoSuccessAction=(payload)=>{
    return {type:TODO_POST_SUCCESS,payload}
}