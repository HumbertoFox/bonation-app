'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import FormRegisterDriver from '@/app/components/forms/formregiterdriver';
import styles from '@/app/style/pages.module.css';

export default function RegisterDriverPage() {
    return (
        <main className={styles.main}>
            <section>
                <h1>Cadastrar Motorista</h1>
                <FontAwesomeIcon className={styles.driver} icon={faIdCard} />
                <FormRegisterDriver />
            </section>
        </main>
    );
};