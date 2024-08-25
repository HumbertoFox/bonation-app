import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

export default function RegisterDriverPage() {
    return (
        <main>
            <section>
                <h1>Cadastrar Motorista</h1>
                <FontAwesomeIcon icon={faIdCard} />
            </section>
        </main>
    );
};