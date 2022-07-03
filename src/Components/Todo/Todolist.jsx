import { useSelector } from "react-redux"


function TodoList(){

    const todos = useSelector((state)=>state.todos.todos)

    const loading = useSelector((state)=>state.todos.loading)
    return(
        <div>
            <h1>Todos</h1>

        {loading && <div>Loading</div>}
            {todos.map((item)=>(
                <div key={item.id}>{item.id}  : {item.title}</div>
            ))}
        </div>
       
    )
}

export default TodoList;