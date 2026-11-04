import styles from "./TodoList.module.css";
import listEmptyIcon from '../../assets/img/clipboard.png';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    if (todos.length === 0) {
        return <div className={styles.todoListEmpty}>
            <div className={styles.todoListEmptyIcon}>
                <img src={listEmptyIcon} alt="" />
            </div>

            <div className={styles.todoListEmptyText}>
                <span>У вас пока нет зарегистрированных задач</span>
                <br/>
                Создайте задачи и организуйте свои дела
            </div>
        </div>
    }

    return <ul className={styles.todoList}>
        {todos.map((todo) => (
            <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        ))}
    </ul>
}