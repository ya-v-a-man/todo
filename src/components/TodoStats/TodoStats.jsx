import styles from "./TodoStats.module.css";

export default function TodoStats() {
    return <div className={styles.todoStatsWrap}>
        <div className={styles.todoStatsItem}>
            <span className={styles.todoStatsItemText}>Задачи</span>
            <span className={styles.todoStatsItemQty}>5</span>
        </div>
        <div className={[
            styles.todoStatsItem,
            styles.todoStatsItemSecondary
        ].join(' ')}>
            <span className={styles.todoStatsItemText}>Выполнено</span>
            <span className={styles.todoStatsItemQty}>2 из 5</span>
        </div>
    </div>
}