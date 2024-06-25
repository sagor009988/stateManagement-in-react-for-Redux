import UserInfoWithUseReducer from "./Components/UserInfoWithUseReducer"
import TodoForm from "./Components/todo/TodoForm"
import TodoList from "./Components/todo/TodoList"
import TodoProvider from "./context/TodoProvider"





function App() {
  

  return (
    <TodoProvider>
      
    <div>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </div>
    </TodoProvider>
  )
}

export default App
