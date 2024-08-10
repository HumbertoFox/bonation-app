'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChalkboardUser, faTruck, faIdCard, faPersonShelter } from '@fortawesome/free-solid-svg-icons';
import styles from '@/app/style/pages.module.css';
import Link from 'next/link';

export default function RegistersMenuPage() {
    return (
        <main className={styles.main}>
            <div className={styles.divmenuregister}>
                <Link href={'/'}>
                    <FontAwesomeIcon className={styles.iconsmenu} icon={faHouse} />
                </Link>
                <Link href={'/registeruser'}>
                    <FontAwesomeIcon className={styles.iconsmenu} icon={faChalkboardUser} />
                </Link>
                <Link href={'/registervehicle'}>
                    <FontAwesomeIcon className={styles.iconsmenu} icon={faTruck} />
                </Link>
                <Link href={'/registerdriver'}>
                    <FontAwesomeIcon className={styles.iconsmenu} icon={faIdCard} />
                </Link>
                <Link href={'/registerhelper'}>
                    <FontAwesomeIcon className={styles.iconsmenu} icon={faPersonShelter} />
                </Link>
            </div>
        </main>
    );
};