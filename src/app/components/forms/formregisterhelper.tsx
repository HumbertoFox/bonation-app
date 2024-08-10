import styles from '@/app/components/style/forms.module.css';

export default function FormRegisterHelper() {
    return (
        <form className={styles.formhelper}>
            <input type='text' id='name' placeholder='Nome' />
            <input type='number' id='cpf' placeholder='CPF' />
            <input type='number' id='zipcode' placeholder='CEP' />
            <input type='text' id='street' placeholder='Logradouro: Av/Rua/Trav' />
            <input type='text' id='nunresidence' placeholder='Nº Casa/Edifício' />
            <div className={styles.divradiushelper}>
                <label htmlFor='house'>
                    <input type='radio' name='residence' id='house' value='house' />
                    Casa</label>
                <label htmlFor='buildings'>
                    <input type='radio' name='residence' id='buildings' value='building' />
                    Edifício</label>
            </div>
            <div className={styles.divhelperbuilding}>
                <input type='text' id='building' placeholder='Nome do Edifício' />
                <input type='text' id='block' placeholder='Bloco' />
                <input type='text' id='apartment' placeholder='Apartamento' />
            </div>
            <input type='text' id='neighborhod' placeholder='Bairro/Distrito' />
            <input type='text' id='city' placeholder='Cidade' />
            <div className={styles.divbtnhelper}>
                <input type='submit' title='Cadastrar Ajudante' value='Cadastrar' />
                <button type='button' title='Voltar ao Menu'>Menu</button>
            </div>
        </form>
    );
};