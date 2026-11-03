import styles from "./Header.module.css";
import toDoLogo from '../../assets/img/to-do-logo.svg';

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.headerWrap}>
            <img className={styles.headerLogo} src={toDoLogo} alt="Todo logo" />
            <div className={styles.headerTitle}>to<span>do</span></div>
        </div>
    </header>
}