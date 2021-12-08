import { ADD, EDIT, FILTER } from "./types"

export const add=(newTask)=>{
    return{
        type:ADD,
        payload:newTask
    }
}

export const filter=(bool)=>{
    return{
        type:FILTER,
        payload:bool
    }
}

export const edit=(x)=>{
    return{
        type:EDIT,
        payload:x
    }
}