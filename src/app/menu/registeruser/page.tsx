import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default function RgisterUserPage() {
    return (
        <main>
            <section>
                <h1>Cadastrar Usuário</h1>
                <FontAwesomeIcon icon={faUserPlus} />
            </section>
        </main>
    );
};