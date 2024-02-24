
import React from 'react';
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'

import {getAllTodoThunk} from '../redux/slices/TodoSlice';
import Todo from './Todo';

const Todos = () => {
    const dispatch = useDispatch();
    const getAllTodos = useSelector((state) => state.todo)
  
    useEffect(() =>{
        console.log("in useEffect");
        dispatch(getAllTodoThunk());

    },[dispatch])
  return (
   <article>
    <ul>
        {getAllTodos.map((todo) => <Todo key={todo._id}  todo={todo}/> )}
    </ul>
   </article>
  );
}

export default Todos;
