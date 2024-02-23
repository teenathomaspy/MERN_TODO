import { useState } from "react";
import { useDispatch } from "react-redux";
import {toggleTodoThunk,deleteTodoThunk,udateTodoThunk} from '../redux/slices/TodoSlice';

const Todo = ({todo}) => {
    const dispatch = useDispatch();
    const [editing,setEditing] = useState(false);
    const [text,setText] = useState(todo.todo);
    const toggleTodo = () =>{
        dispatch(toggleTodoThunk(todo._id));

    }
    const deleteTodo = () =>{
        dispatch(deleteTodoThunk(todo._id));
    }
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        dispatch(udateTodoThunk({id:todo._id,todo:text}));
        setEditing(prev => !prev);
        

    }
    return(
        <li className='task'  style={{textDecoration:todo.done ? 'line-through':'',
        color:todo.done ?'#bdc3c7': '#34495e'}}>
            {editing && <form onSubmit={onSubmitHandler}>
                <input type ='text' 
                className = 'edit-todo'
                value={text} 
                onChange={(e)=> setText(e.target.value)}/>
            </form>}
            {!editing && <span>{todo.todo}</span>}
            
            
            <span className='icon' onClick={toggleTodo} style={{color:todo.done ? '#63e6be' : '#b36169'}}><i className={todo.done ? 'fas fa-check-circle' :'fa-solid fa-circle-xmark'}/>
            </span>
           
            <span className='icon' onClick={()=> setEditing(prev => !prev)}><i className='fa-solid fa-pen'/></span>
            <span className='icon' onClick={deleteTodo}><i className='fa-solid fa-trash'/></span>
        </li>

    );
}
export default Todo;