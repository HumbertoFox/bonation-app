'use client';
import styles from './formlogin.module.css';

export default function FormLogin() {

    return (
        <form className={styles.form}>
            <input type='text' placeholder='CPF' />
            <input type='password' placeholder='Senha' />
            <input type='submit' value='Entrar' />
        </form>
    );
};