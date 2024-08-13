import styles from '@/app/components/style/forms.module.css';

type FormDonationProps = {
    id?: string
};

export default function FormRegisterDonations({ id }: FormDonationProps) {

    return (
        <form className={styles.formdonation}>
            <fieldset>
                <legend>Lista de objetos a serem doados</legend>
                <div className={styles.divcods}>
                    {id && <div className={styles.divobj}>
                        <label htmlFor='coddonation'>Código da Doação</label>
                        <input type='text' id='coddonation' disabled />
                    </div>
                    }
                    <div className={styles.divobj}>
                        <label htmlFor='donorcode'>Código do Doador</label>
                        <input type='text' id='donorcode' disabled />
                    </div>
                </div>
                <div className={styles.divobjprimary}>
                    <div className={styles.divobjqtd}>
                        <div className={styles.divobj}>
                            <label htmlFor='objeto1'>objeto 1</label>
                            <input type='text' id='objeto1' />
                        </div>
                        <div className={styles.divqtd}>
                            <label htmlFor='quant1'>Qantidade/Caixa/Sacola</label>
                            <input type='text' id='quant1' />
                        </div>
                    </div>
                    <div className={styles.divobjqtd}>
                        <div className={styles.divobj}>
                            <label htmlFor='objeto2'>objeto 2</label>
                            <input type='text' id='objeto2' />
                        </div>
                        <div className={styles.divqtd}>
                            <label htmlFor='quant2'>Qantidade/Caixa/Sacola</label>
                            <input type='text' id='quant2' />
                        </div>
                    </div>
                    <div className={styles.divobjqtd}>
                        <div className={styles.divobj}>
                            <label htmlFor='objeto3'>objeto 3</label>
                            <input type='text' id='objeto3' />
                        </div>
                        <div className={styles.divqtd}>
                            <label htmlFor='quant3'>Qantidade/Caixa/Sacola</label>
                            <input type='text' id='quant3' />
                        </div>
                    </div>
                    <div className={styles.divobjqtd}>
                        <div className={styles.divobj}>
                            <label htmlFor='objeto4'>objeto 4</label>
                            <input type='text' id='objeto4' />
                        </div>
                        <div className={styles.divqtd}>
                            <label htmlFor='quant4'>Qantidade/Caixa/Sacola</label>
                            <input type='text' id='quant4' />
                        </div>
                    </div>
                    <div className={styles.divobjqtd}>
                        <div className={styles.divobj}>
                            <label htmlFor='objeto5'>objeto 5</label>
                            <input type='text' id='objeto5' />
                        </div>
                        <div className={styles.divqtd}>
                            <label htmlFor='quant5'>Qantidade/Caixa/Sacola</label>
                            <input type='text' id='quant5' />
                        </div>
                    </div>
                    <div className={styles.divobjqtd}>
                        <div className={styles.divobj}>
                            <label htmlFor='objeto6'>objeto 6</label>
                            <input type='text' id='objeto6' />
                        </div>
                        <div className={styles.divqtd}>
                            <label htmlFor='quant6'>Qantidade/Caixa/Sacola</label>
                            <input type='text' id='quant6' />
                        </div>
                    </div>
                    <div className={styles.divobjqtd}>
                        <div className={styles.divobj}>
                            <label htmlFor='objeto7'>objeto 7</label>
                            <input type='text' id='objeto7' />
                        </div>
                        <div className={styles.divqtd}>
                            <label htmlFor='quant7'>Qantidade/Caixa/Sacola</label>
                            <input type='text' id='quant7' />
                        </div>
                    </div>
                    <div className={styles.divobjqtd}>
                        <div className={styles.divobj}>
                            <label htmlFor='objeto8'>objeto 8</label>
                            <input type='text' id='objeto8' />
                        </div>
                        <div className={styles.divqtd}>
                            <label htmlFor='quant8'>Qantidade/Caixa/Sacola</label>
                            <input type='text' id='quant8' />
                        </div>
                    </div>
                    <div className={styles.divobjqtd}>
                        <div className={styles.divobj}>
                            <label htmlFor='objeto9'>objeto 9</label>
                            <input type='text' id='objeto9' />
                        </div>
                        <div className={styles.divqtd}>
                            <label htmlFor='quant9'>Qantidade/Caixa/Sacola</label>
                            <input type='text' id='quant9' />
                        </div>
                    </div>
                    <div className={styles.divobjqtd}>
                        <div className={styles.divobj}>
                            <label htmlFor='objeto10'>objeto 10</label>
                            <input type='text' id='objeto10' />
                        </div>
                        <div className={styles.divqtd}>
                            <label htmlFor='quant10'>Qantidade/Caixa/Sacola</label>
                            <input type='text' id='quant10' />
                        </div>
                    </div>
                    <div className={styles.divobjqtd}>
                        <div className={styles.divobj}>
                            <label htmlFor='objeto11'>objeto 11</label>
                            <input type='text' id='objeto11' />
                        </div>
                        <div className={styles.divqtd}>
                            <label htmlFor='quant11'>Qantidade/Caixa/Sacola</label>
                            <input type='text' id='quant11' />
                        </div>
                    </div>
                    <div className={styles.divobjqtd}>
                        <div className={styles.divobj}>
                            <label htmlFor='objeto12'>objeto 12</label>
                            <input type='text' id='objeto12' />
                        </div>
                        <div className={styles.divqtd}>
                            <label htmlFor='quant12'>Qantidade/Caixa/Sacola</label>
                            <input type='text' id='quant12' />
                        </div>
                    </div>
                    <div className={styles.divobjqtd}>
                        <div className={styles.divobj}>
                            <label htmlFor='objeto13'>objeto 13</label>
                            <input type='text' id='objeto13' />
                        </div>
                        <div className={styles.divqtd}>
                            <label htmlFor='quant13'>Qantidade/Caixa/Sacola</label>
                            <input type='text' id='quant13' />
                        </div>
                    </div>
                    <div className={styles.divobjqtd}>
                        <div className={styles.divobj}>
                            <label htmlFor='objeto14'>objeto 14</label>
                            <input type='text' id='objeto14' />
                        </div>
                        <div className={styles.divqtd}>
                            <label htmlFor='quant14'>Qantidade/Caixa/Sacola</label>
                            <input type='text' id='quant14' />
                        </div>
                    </div>
                </div>
                <label htmlFor='obs'>Observações</label>
                <textarea id='obs' />
            </fieldset>
            <div className={styles.divbtn}>
                <input type='submit' title={id ? 'Editar Doação' : 'Cadastrar Doação'} className={styles.inputsubmit} value={id ? 'Edit. Doação' : 'Cad. Doação'} />
                {!id && <input type='submit' title='Cadastrar Doação e ir para Agendar Coleta' className={styles.inputsubmit} value='Cad. e Agendar' />}
            </div>
        </form>
    );
};