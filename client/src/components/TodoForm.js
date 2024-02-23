import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import styles from './TodoForm.module.css';
import {addNewTodo_thunk} from '../redux/slices/TodoSlice';
const TodoForm = () => {
    const [text,setText] = useState('');
    const dispatch = useDispatch();

    const onInputChange = (e) => {
        //console.log(e.target.value);
        setText(e.target.value);
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(addNewTodo_thunk(text)).unwrap();
        setText('');

    }
  return (
    <div>
        <form onSubmit={submitHandler}>
      <input className={styles.input} 
        placeholder='Enter new todo...'
        value={text}
        onChange={onInputChange}
        />
        </form>
    </div>
  );
}

export default TodoForm;
