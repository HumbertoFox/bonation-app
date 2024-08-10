'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import FormRegisterUser from '@/app/components/forms/formregisteruser';
import styles from '@/app/style/login.module.css';

export default function RgisterUserPage() {
    return (
        <main className={styles.main}>
            <section>
                <h1>Cadastrar Usuário</h1>
                <FontAwesomeIcon className={styles.user} icon={faUserPlus} />
                <FormRegisterUser />
            </section>
        </main>
    );
};