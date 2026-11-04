import styles from "./TodoStats.module.css";

export default function TodoStats( {todos} ) {
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;

    return <div className={styles.todoStatsWrap}>
        <div className={styles.todoStatsItem}>
            <span className={styles.todoStatsItemText}>Задачи</span>
            <span className={styles.todoStatsItemQty}>{totalCount}</span>
        </div>
        <div className={[
            styles.todoStatsItem,
            styles.todoStatsItemSecondary
        ].join(' ')}>
            <span className={styles.todoStatsItemText}>Выполнено</span>
            <span className={styles.todoStatsItemQty}>{completedCount} из {totalCount}</span>
        </div>
    </div>
}
