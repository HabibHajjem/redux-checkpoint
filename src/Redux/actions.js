import { ADD, EDIT, FILTER, REMOVE } from "./types"

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

export const remove=(x)=>{
    return{
        type:REMOVE,
        payload:x
    }
}