import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';

export default function LoginPage() {
    return (
        <main>
            <section>
                <h1>Usuário do Sistema</h1>
                <FontAwesomeIcon icon={faUserCheck} />
            </section>
        </main>
    );
};