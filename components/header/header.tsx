import styles from "../../styles/Header.module.css"

export default function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.nav_content}>
                <div className={styles.left_nav}>
                    <h1>TWIST VISUAL</h1>
                </div>
                <div className={styles.mid_nav}></div>
                <div className={styles.right_nav}></div>
            </div>
        </header>
    );
}