import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonShelter } from '@fortawesome/free-solid-svg-icons';

export default function RegisterHelperPage() {
    return (
        <main>
            <section>
                <h1>Cadastrar Ajudante</h1>
                <FontAwesomeIcon icon={faPersonShelter} />
            </section>
        </main>
    );
};