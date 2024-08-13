import SideBarReport from '@/app/components/sidebar/sidebar';
import styles from '@/app/page.module.css';
import Menu from '@/app/components/menu/menu';

export default function ReportPage() {
    return (
        <main className={styles.main}>
            <Menu />
            <div className={styles.divmain}>
                <SideBarReport />
            </div>
        </main>
    );
};