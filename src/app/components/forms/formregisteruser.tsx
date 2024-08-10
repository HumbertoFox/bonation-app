import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import styles from '@/app/components/style/forms.module.css';

export default function FormRegisterUser() {
    const router = useRouter();
    const [ispass, setIspass] = useState(false);
    const [ispasschecked, setIspasschecked] = useState(false);
    const handlePass = () => setIspass(!ispass);
    const handlePassChecked = () => setIspasschecked(!ispasschecked);

    return (
        <form className={styles.formuser}>
            <input type='text' id='name' placeholder='Nome' />
            <input type='number' id='cpf' placeholder='CPF' />
            <input type='number' id='zipcode' placeholder='CEP' />
            <input type='text' id='street' placeholder='Logradouro: Av/Rua/Trav' />
            <input type='text' id='nunresidence' placeholder='Nº Casa/Edifício' />
            <div className={styles.divradiususer}>
                <label htmlFor='house'>
                    <input type='radio' name='residence' id='house' value='house' />
                    Casa</label>
                <label htmlFor='buildings'>
                    <input type='radio' name='residence' id='buildings' value='building' />
                    Edifício</label>
            </div>
            <div className={styles.divuserbuilding}>
                <input type='text' id='building' placeholder='Nome do Edifício' />
                <input type='text' id='block' placeholder='Bloco' />
                <input type='text' id='livingapartmentroom' placeholder='Apartamento/Sala' />
            </div>
            <input type='text' id='neighborhod' placeholder='Bairro/Distrito' />
            <input type='text' id='city' placeholder='Cidade' />
            <div className={styles.divpass}>
                <input type={ispass ? 'text' : 'password'} id='password' autoComplete='off' placeholder='Senha' />
                <button type='button' onClick={handlePass}>
                    {!ispass && <FontAwesomeIcon icon={faEye} />}
                    {ispass && <FontAwesomeIcon icon={faEyeSlash} />}
                </button>
            </div>
            <div className={styles.divpass}>
                <input type={ispasschecked ? 'text' : 'password'} id='passwordchecked' autoComplete='off' placeholder='Confirme Senha' />
                <button type='button' onClick={handlePassChecked}>
                    {!ispasschecked && <FontAwesomeIcon icon={faEye} />}
                    {ispasschecked && <FontAwesomeIcon icon={faEyeSlash} />}
                </button>
            </div>
            <div className={styles.divbtnuser}>
                <input type='submit' title='Cadastrar Ajudante' value='Cadastrar' />
                <button type='button' title='Voltar ao Menu' onClick={() => router.push('/registermenu')}>Menu</button>
            </div>
        </form>
    );
};