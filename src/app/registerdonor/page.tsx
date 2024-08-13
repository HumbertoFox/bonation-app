import FormRegisterDonor from '@/app/components/forms/formregisterdonor';
import Menu from '@/app/components/menu/menu';
import styles from '@/app/page.module.css';

export default function RegisterDonorPage() {
    return (
        <main className={styles.main}>
            <Menu />
            <div className={styles.divmain}>
                <FormRegisterDonor iddonor='off' />
            </div>
        </main>
    );
};