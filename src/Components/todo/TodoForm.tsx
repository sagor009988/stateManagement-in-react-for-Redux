import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";


const TodoForm = () => {
    const {state,dispatch}=useContext(TodoContext);
    console.log(state);
    
    const [task,setTask]=useState()

    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault()
        
        const Todo={
            id:Math.random().toString(16).substring(2,8), ///auto generated id
            title:task,
            isCompleted:false
        }
        dispatch({type:'addTodo',payload:Todo})
        
    }

    return (
        <div>
            <h1>Add ToDo</h1>
           <form onSubmit={handleSubmit}>
           <label htmlFor="Todo">Task: </label>

            <input  className='border border-slate-900' type="text" name="addTodo" id="addToDo" onBlur={(e)=>setTask(e.target.value)} />

            <button className='bg-slate-950 text-white p-1 rounded-2xl' type='submit'>Submit</button>
           </form>
        </div>
    );
};

export default TodoForm;