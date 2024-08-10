import FormRegisterDonations from '@/app/components/forms/formregisterdonation';
import Menu from '@/app/components/menu/menu';
import styles from '@/app/page.module.css';

export default function RegisterDonationPage() {
    return (
        <main className={styles.main}>
            <Menu />
            <div className={styles.divmain}>
                <FormRegisterDonations />
            </div>
        </main>
    );
};