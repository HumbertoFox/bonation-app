'use client';
import styles from './formlogin.module.css';

export const FormLogin = () => {

    return (
        <form className={styles.form}>
            <input type='text' placeholder='CPF' />
            <input type='password' placeholder='Senha' />
            <input type='submit' value='Entrar' />
        </form>
    );
};