import styles from '@/app/components/style/forms.module.css';

type FormSearchProps = {
    id?: string
};

export default function FormSearch({ id }: FormSearchProps) {

    if (id) {
        return (
            <form className={styles.formsearch}>
                <legend>Pesquisar Doação</legend>
                <label htmlFor='coddonation'>Código da Doação</label>
                <input type='search' id='coddonation' />
                <div className={styles.divbtnsearch}>
                    <input type='submit' value='Pesquisar' />
                </div>
            </form>
        );
    };

    return (
        <form className={styles.formsearch}>
            <legend>Pesquisar Doador</legend>
            <label htmlFor='codnametel'>Nome/Telefone/Código do Doador</label>
            <input type='search' id='codnametel' />
            <div className={styles.divbtnsearch}>
                <input type='submit' value='Código' />
                <input type='submit' value='Nome' />
                <input type='submit' value='Telefone' />
            </div>
        </form>
    );
};