'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import FormRegisterVehicle from '@/app/components/forms/formregistervehicle';
import styles from '@/app/style/login.module.css';

export default function RegisterVehiclePage() {
    return (
        <main className={styles.main}>
            <section>
                <h1>Cadastrar Veículo</h1>
                <FontAwesomeIcon className={styles.vehicle} icon={faTruck} />
                <FormRegisterVehicle />
            </section>
        </main>
    );
};