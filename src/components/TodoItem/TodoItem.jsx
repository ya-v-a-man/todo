import styles from "./TodoItem.module.css";
import delIcon from '../../assets/img/trash.svg';

export default function TodoItem({ completed, text }) {
    return <li className={styles.todoItem}>
        <input className={styles.todoItemCheck} type="checkbox" checked={completed} readOnly />
        <span className={styles.todoItemText}>
            {text}
        </span>
        <div className={styles.todoItemDel}>
            <img src={delIcon} alt="" />
        </div>
    </li>
}