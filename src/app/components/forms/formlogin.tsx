'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import styles from './forms.module.css';

export default function FormLogin() {
    const [ispass, setIspass] = useState(false);
    const handlePass = () => setIspass(!ispass);
    return (
        <form className={styles.formlogin}>
            <input type='text' placeholder='CPF' />
            <div className={styles.divpass}>
                <input type={ispass ? 'text' : 'password'} id='password' placeholder='Senha' />
                <button type='button' onClick={handlePass}>
                    {!ispass && <FontAwesomeIcon icon={faEye} />}
                    {ispass && <FontAwesomeIcon icon={faEyeSlash} />}
                </button>
            </div>
            <input type='submit' value='Entrar' />
        </form>
    );
};