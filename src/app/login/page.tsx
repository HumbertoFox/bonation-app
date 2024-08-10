'use client';
import FormLogin from '@/app/components/forms/formlogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import styles from '@/app/style/pages.module.css';

export default function LoginPage() {
    return (
        <main className={styles.main}>
            <section>
                <h1>Usuário do Sistema</h1>
                <FontAwesomeIcon className={styles.user} icon={faUserCheck} />
                <FormLogin />
            </section>
        </main>
    );
};