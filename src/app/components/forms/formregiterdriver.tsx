import { useRouter } from 'next/navigation';
import styles from '@/app/components/style/forms.module.css';

export default function FormRegisterDriver() {
    const router = useRouter();

    return (
        <form className={styles.formdriver}>
            <input type='text' id='name' placeholder='Nome' />
            <input type='number' id='cnh' placeholder='CNH' />
            <input type='number' id='zipcode' placeholder='CEP' />
            <input type='text' id='street' placeholder='Logradouro: Av/Rua/Trav' />
            <input type='text' id='nunresidence' placeholder='Nº Casa/Edifício' />
            <div className={styles.divradiusdriver}>
                <label htmlFor='house'>
                    <input type='radio' name='residence' id='house' value='house' />
                    Casa</label>
                <label htmlFor='buildings'>
                    <input type='radio' name='residence' id='buildings' value='building' />
                    Edifício</label>
            </div>
            <div className={styles.divdriverbuilding}>
                <input type='text' id='building' placeholder='Nome do Edifício' />
                <input type='text' id='block' placeholder='Bloco' />
                <input type='text' id='apartment' placeholder='Apartamento' />
            </div>
            <input type='text' id='neighborhod' placeholder='Bairro/Distrito' />
            <input type='text' id='city' placeholder='Cidade' />
            <div className={styles.divbtndriver}>
                <input type='submit' title='Cadastrar Motorista' value='Cadastrar' />
                <button type='button' title='Voltar ao Menu' onClick={() => router.push('/registermenu')}>Menu</button>
            </div>
        </form>
    );
};