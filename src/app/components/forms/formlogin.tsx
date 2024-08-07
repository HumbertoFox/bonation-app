'use client';
import { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import styles from './formlogin.module.css';

export const FormLogin = () => {
    const [ispass, setIspass] = useState(false);
    const handlePass = () => setIspass(!ispass)

    return (
        <form className={styles.form}>
            <input type='text' id='cpf' placeholder='CPF' />
            <div className={styles.divpass}>
                <input type={ispass ? 'text' : 'password'} id='password' placeholder='Senha' />
                <button type='button' onClick={handlePass}>
                    {!ispass && <Eye className={styles.iconpasson} />}
                    {ispass && <EyeOff className={styles.iconpasson} />}
                </button>
            </div>
            <input type='submit' value='Entrar' />
        </form>
    );
};