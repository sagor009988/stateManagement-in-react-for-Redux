import {useContext} from 'react'
import { TodoContext } from '../../context/TodoProvider';

type TTodo={
    id:string;
    title:string,
    isCompleted:boolean;
}
const TodoList = () => {
  
   const {state,dispatch}=useContext(TodoContext)
   
    
    return (
        <div>
            <h1> List With Complete or not</h1>
            {
                state.map((item:TTodo)=>(<p className='cursor-pointer' onClick={()=>dispatch({type:'taskCompleted',payload:item.id})}>{item.title}</p>))
            }
        </div>
    );
};

export default TodoList;