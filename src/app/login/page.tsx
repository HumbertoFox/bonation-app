'use client';
import FormLogin from '@/app/components/forms/formlogin';
import { UserCheck } from 'react-feather';
import styles from './login.module.css';

export default function LoginPage() {
    return (
        <main className={styles.main}>
            <section>
                <h1>Usuário do Sistema</h1>
                <UserCheck className={styles.user} />
                <FormLogin />
            </section>
        </main>
    );
};