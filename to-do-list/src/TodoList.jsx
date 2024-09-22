import { useState } from "react";

export default function TodoList(){
    let [todos,setTodos]=useState(["sample Task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    return(<div>
        <input onChange={updateTodoValue} value={newTodo} style={{ width: '200px', height: '30px', fontSize:'1.25rem' }} placeholder="add a task" ></input><br/><br/>
        <button onClick={addNewTask}>Add Task</button>
        <br/><br/> <br/><hr/>
        <h3>To-Do List</h3>
        <ul>
            {
                todos.map((todo)=>(
                    <li>{todo}</li>
                ))
            }
        </ul>
    </div>
    );
};