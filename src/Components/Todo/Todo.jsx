import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodoFailure, getTodoRequest, getTodos, getTodoSuccess } from "../../Redux/todos/action";
import TodoInput from "./Todioinput";
import TodoList from "./Todolist";

  //http://localhost:3000/todo
function Todo() {

    const  dispatch = useDispatch()
    useEffect(()=>{
        getTodos(dispatch)
    },[])



  return (
    <div>
      <TodoInput ></TodoInput>
      <br></br>
      <TodoList></TodoList>
    </div>
  );
}

export default Todo;
