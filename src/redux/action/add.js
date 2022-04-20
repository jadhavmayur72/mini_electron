

export const addTodo=(data)=>{

    return{
        type:"ADDTODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }

    }
}
export const delTodo=()=>{

    return{
        type:"DELTODO",

    }
}

export const  removeTodo=()=>{

    return{
        type:"REMOVE_TODO",

    }
}

