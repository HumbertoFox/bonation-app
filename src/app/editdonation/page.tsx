import Menu from '@/app/components/menu/menu';
import styles from '@/app/page.module.css';
import FormRegisterDonations from '../components/forms/formregisterdonation';
import FormSearch from '../components/forms/formsearch';
import FormRegisterDonor from '../components/forms/formregisterdonor';

export default function EditDonationPage() {
    return (
        <main className={styles.main}>
            <Menu />
            <div className={styles.divmainforms}>
                <FormSearch id='editdonation' />
                <FormRegisterDonations id='editdonation' />
                <FormRegisterDonor id={true} />
            </div>
        </main>
    );
};