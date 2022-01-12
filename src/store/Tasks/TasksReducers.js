const initialState ={
    tasks:[]
}

const TaskReducers =(state=initialState,action)=>{

    switch(action.type){
        case "ADDTASK":
            return{
                tasks:[...state.tasks, action.payload]
            }
        
        case "EDITTASK":
            const newTaskss = state.tasks.map((task)=>{
                if(task.id===action.payload.id){
                    task={
                        ...task,
                        text:action.payload.text
                    }
                }
                return task;
            });
            return{
                tasks:newTaskss
            }

        case "DELETE":
            const index = state.tasks.findIndex(task=>task.id===action.payload);
            state.tasks.splice(index,1);
            
            return{
                tasks: [...state.tasks]
            }

        case "CHECKEDTASK":
            
            
            return{
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.id) {
                        task = {
                            ...task,
                            done: action.payload.done
                        }
                    }
                    return task;
                }),
            }

        default:
            return state;
    }

}

export default TaskReducers;