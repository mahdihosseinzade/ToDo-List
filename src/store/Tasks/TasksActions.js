
export const addTask =(payload)=>{
    return{
        type:"ADDTASK",
        payload:payload
    }
}

export const editTask =(payload)=>{
    return{
        type : "EDITTASK",
        payload:payload
    }
}

export const deleteTask =(payload)=>{
    return{
        type:"DELETE",
        payload:payload
    }
}

export const checkedTask =(payload)=>{
    return{
        type:"CHECKEDTASK",
        payload: payload
    }
}