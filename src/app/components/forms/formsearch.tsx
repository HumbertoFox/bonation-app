import styles from '@/app/components/style/forms.module.css';

export default function FormSearch() {
    return (
        <form className={styles.formsearch}>
            <legend>Pesquisar Doador</legend>
            <label htmlFor='codnametel'>Pesquisar Nome/Telefone/Código Doador</label>
            <input type='search' id='codnametel' />
            <div className={styles.divbtnsearch}>
                <input type='submit' value='Código' />
                <input type='submit' value='Nome' />
                <input type='submit' value='Telefone' />
            </div>
        </form>
    );
};