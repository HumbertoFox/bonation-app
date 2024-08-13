import FormRegisterDonations from '@/app/components/forms/formregisterdonation';
import Menu from '@/app/components/menu/menu';
import styles from '@/app/page.module.css';
import FormSearch from '../components/forms/formsearch';
import FormRegisterDonor from '../components/forms/formregisterdonor';

export default function RegisterDonationPage() {
    return (
        <main className={styles.main}>
            <Menu />
            <div className={styles.divmain}>
                <div className={styles.divformsearch}>
                    <FormSearch />
                    <FormRegisterDonor id={true} />
                </div>
                <FormRegisterDonations />
            </div>
        </main>
    );
};