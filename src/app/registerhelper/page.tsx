'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonShelter } from '@fortawesome/free-solid-svg-icons';
import FormRegisterHelper from "@/app/components/forms/formregisterhelper";
import styles from '@/app/style/pages.module.css';

export default function RegisterHelperPage() {
    return (
        <main className={styles.main}>
            <section>
                <h1>Cadastrar Ajudante</h1>
                <FontAwesomeIcon className={styles.helper} icon={faPersonShelter} />
                <FormRegisterHelper />
            </section>
        </main>
    );
};