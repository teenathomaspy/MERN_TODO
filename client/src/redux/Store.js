import {configureStore } from '@reduxjs/toolkit'
import todos from './slices/TodoSlice';
const Store = configureStore({
    reducer:todos
});

export  default Store;