import { useState } from 'react'
import styles from './TodoForm.module.css';
import btnIcon from '../../assets/img/plus.svg';

export default function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();

        if(!value.trim()) {
            return;
        }

        addTodo(value);
        setValue('');
    }

    return <form className={styles.todoForm} onSubmit={handleSubmit}>
        <input className={styles.todoTextInput} type="text" value={value} onChange={handleChange} placeholder="Добавить новую задачу" />
        <button className={styles.todoSubmit} type="submit">
            <span>Добавить</span>
            <img src={btnIcon} alt="" />
        </button>
    </form>
}