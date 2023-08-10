import { reducer } from "./reducer";
import { legacy_createStore } from "redux";

const initState={
    todos:[],
    isLoading:false,
    isError:false,
    errorMessage:""
}
export const store=legacy_createStore(reducer,initState)