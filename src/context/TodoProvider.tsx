import { ReactNode, createContext ,useReducer} from "react";

export const TodoContext=createContext<{ state: TTodo[]; dispatch: React.Dispatch<Taction>}|undefined>(undefined)

type TodoProviderpeops={
    children:ReactNode;
}

type TTodo={
    id:string;
    title:string,
    isCompleted:boolean;
}

const initialState:TTodo[]=[];

type Taction ={
    type:string;
    payload:TTodo |string
}

const reducer=(currentState:TTodo[],action:Taction)=>{
    switch(action.type){
        case "addTodo":
            return [...currentState , action.payload as TTodo];

            case "taskCompleted":
                return currentState.map((item:TTodo)=>item.id == action.payload ? {...item , isCompleted:!item.isCompleted}:"item")
        default:
            return currentState
    }
}

const TodoProvider = ({children}:TodoProviderpeops) => {

    const [state,dispatch]=useReducer(reducer,initialState);

    const values={
        state,
        dispatch
    }

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;