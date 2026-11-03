import styles from "./TodoItem.module.css";
import delIcon from "../../assets/img/trash.svg";

export default function TodoItem({ id, completed, text, toggleTodo }) {
    return (
        <li
            className={`${styles.todoItem} ${completed ? styles.completed : ""}`}
        >
            <label className={styles.todoItemCheckLabel}>
                <input
                    className={styles.todoItemCheck}
                    type="checkbox"
                    checked={completed}
                    onChange={() => toggleTodo(id)}
                    aria-label="Отметить задачу"
                />
                <span
                    className={`${styles.todoItemCustomCheck} ${completed ? styles.completed : ""}`}
                ></span>
            </label>
            <span
                className={`${styles.todoItemText} ${completed ? styles.completed : ""}`}
            >
                {text}
            </span>
            <div className={styles.todoItemDel}>
                <img src={delIcon} alt="Удалить" />
            </div>
        </li>
    );
}
