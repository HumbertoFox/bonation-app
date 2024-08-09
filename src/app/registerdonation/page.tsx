import FormCadDonations from '@/app/components/forms/formcaddonation';
import Menu from '@/app/components/menu/menu';
import styles from '@/app/page.module.css';

export default function RegisterDonationPage() {
    return (
        <main className={styles.main}>
            <Menu />
            <div className={styles.divmain}>
                <FormCadDonations />
            </div>
        </main>
    );
};