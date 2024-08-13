import Menu from '@/app/components/menu/menu';
import styles from '@/app/page.module.css';
import FormSearch from '../components/forms/formsearch';
import FormRegisterDonor from '../components/forms/formregisterdonor';

export default function EditDonorPage() {
    return (
        <main className={styles.main}>
            <Menu />
            <div className={styles.divmainforms}>
                <FormSearch />
                <FormRegisterDonor name='Edit.' />
            </div>
        </main>
    );
};