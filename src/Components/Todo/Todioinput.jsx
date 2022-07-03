import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos, getTodos, getTodoSuccess } from "../../Redux/todos/action";


function TodoInput() {
  const [text, setText] = useState("");

    const dispatch = useDispatch();


   const addHandleTodo=()=>{
        addTodos({
            title:text,
            dispatch
        }).then(()=>{
            getTodos(dispatch);
        })
   }

    // console.log(text);
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addHandleTodo}>Add</button>
    </div>
  );
}
export default TodoInput;
