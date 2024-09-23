import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4(), isDone:false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {task:newTodo, id: uuidv4(), isDone:false}]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) =>{
        setTodos((prevTodos) => todos.filter((prevTodos)=>prevTodos.id != id));
    };

    let MarkAllAsDone = () =>{
        setTodos((prevtodos) => (
            prevtodos.map((todo)=>{
                return{
                    ...todo,
                    isDone:true
                };
            })
        ));
    };

    let MarkOneAsDone=(id)=>{
        setTodos(
            (prevtodos) => (
            prevtodos.map((todo)=>{
                if(todo.id == id){
                    return{
                        ...todo,
                        isDone:true,
                    };
                }else{
                    return todo;
                }
            })
        ));
    }

    return(<div>
        <input onChange={updateTodoValue} value={newTodo} style={{ width: '200px', height: '30px', fontSize:'1.25rem' }} placeholder="add a task" ></input><br/><br/>
        <button onClick={addNewTask}>Add Task</button>
        <br/><br/> <br/><hr/>
        <h3>To-Do List</h3>
        <ul>
            {
                todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={todo.isDone?{textDecorationLine:'line-through'}:{}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)} style={{ width: '75px', height: '30px', fontSize:'.75rem'}}>Delete</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => MarkOneAsDone(todo.id)} style={{ width: '120px', height: '30px', fontSize:'.75rem'}}>Mark as Done</button>
                    </li>             
                )) 
            }
        </ul>
        <button onClick={MarkAllAsDone}>Mark All as Done</button>
    </div>
    );
};