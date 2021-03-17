import styles from '../styles/Layout.module.css'

import Header from './header/header'

export default function Layout() {
    return (
        <main>
            <Header/>
            <div className={styles.container}>
                
            </div>
        </main>  
    );
}