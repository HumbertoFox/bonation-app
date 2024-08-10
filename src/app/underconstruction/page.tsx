import Menu from '@/app/components/menu/menu';
import styles from '@/app/page.module.css';

export default function UnderConstructionPage() {
    return (
        <main className={styles.main}>
            <Menu />
            <div className={styles.divmain}>
                <h1>under construction</h1>
            </div>
        </main>
    );
};