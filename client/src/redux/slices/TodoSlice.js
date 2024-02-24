import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const TODO_API = 'http://localhost:8000/todos';
const TodoSlice = createSlice({
    name:'todos',
    initialState:{
        todo:[]
    },
    reducers:{
    },
    extraReducers(builder) {
        builder.addCase(addNewTodo_thunk.fulfilled,(state,action) =>{
            state.todo = [...state.todo,action.payload].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
        })
        builder.addCase(getAllTodoThunk.fulfilled,(state,action) => {
            console.log(action.payload);
            state.todo= action.payload;
        })
        builder.addCase(toggleTodoThunk.fulfilled,(state,action) =>{
            state.todo = state.todo.map((eachTodo) => 
                  eachTodo._id === action.payload._id ? {...eachTodo,done:!eachTodo.done}:eachTodo
                )
        })
        builder.addCase(deleteTodoThunk.fulfilled, (state,action) => {
            console.log('hh',action.payload);
            state.todo = state.todo.filter((item) => item._id !== action.payload._id);
        })
        builder.addCase(udateTodoThunk.fulfilled,(state,action) =>{
            console.log('updateThunk',action.payload);
            state.todo = state.todo.map((eachTodo) => 
                eachTodo._id === action.payload._id? {...eachTodo,todo:action.payload.todo}:eachTodo
            )
        })
    }
})

export const addNewTodo_thunk = createAsyncThunk('todos/add_todo',async (newTodo) => {
    console.log(newTodo);
    try {
        const response =await axios.post(TODO_API,{newTodo});
        return response.data;
    } catch (error) {
        console.log('something happened in addNewTodo API',error.message);
    }
})

export const getAllTodoThunk = createAsyncThunk('todos/getAll_todo',async () => {
    try{
    const response = await axios.get(TODO_API);
    return response.data;
}catch(error){
    console.log('something happened in getAllTodo API',error.message);
}
})

export const toggleTodoThunk = createAsyncThunk('todos/toggle_todo',async (todo_id) => {
    try {
         const response = await axios.get(`${TODO_API}/${todo_id}`);
    return response.data;
    } catch (error) {
        console.log('something happened in toggleTodo API',error.message);
    }
})

export const deleteTodoThunk = createAsyncThunk('todos/delete_todo', async(todo_id) =>{
    try {
      const response = await  axios.delete(`${TODO_API}/${todo_id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
        console.log('something happened in deleteTodo API',error.message);
    }
})

export const udateTodoThunk= createAsyncThunk('todos/update_todo',async (todo) =>{
    try {
        const response = await axios.put(`${TODO_API}/${todo.id}`,{todo:todo.todo});
        return response.data;
    } catch (error) {
        console.log('something happened in updatetodo API',error.message);
    }
})
export const {add_todo,delete_todo,getAll_todo,toggle_todo,update_todo} = TodoSlice.actions;
export default TodoSlice.reducer;