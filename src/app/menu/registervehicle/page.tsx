import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

export default function RegisterVehiclePage() {
    return (
        <main>
            <section>
                <h1>Cadastrar Veículo</h1>
                <FontAwesomeIcon icon={faTruck} />
            </section>
        </main>
    );
};