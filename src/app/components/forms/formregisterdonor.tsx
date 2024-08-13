import styles from '@/app/components/style/forms.module.css';

type FormDonorProps = {
    id?: boolean,
    name?: string,
    iddonor?: string
};

export default function FormRegisterDonor({ id, name, iddonor }: FormDonorProps) {

    return (
        <form className={styles.formdonor}>
            <fieldset disabled={id} >
                <legend>Informações do Doador</legend>
                {!iddonor && <div className={styles.divcoddonor}>
                    <label htmlFor='donorcode'>Código do Doador</label>
                    <input type='text' id='donorcode' disabled />
                </div>
                }
                <label htmlFor='name'>Nome do Doador</label>
                <input type='text' id='name' />
                <label htmlFor='contact1'>Número Móvel do Responsável</label>
                <input type='tel' id='contact1' />
                <label htmlFor='contact2'>Número Móvel do Responsável/Opcional</label>
                <input type='tel' id='contact2' />
                <label htmlFor='contact3'>Número Fixo do Contato/Opcional ou Ramal</label>
                <input type='tel' id='contact3' />
                <label htmlFor='zipcode'>CEP</label>
                <input type='number' id='zipcode' />
                <label htmlFor='street'>Logradouro: Av/Travessa/Rua</label>
                <input type='text' id='street' />
                <label htmlFor='nunresidence'>Número da Casa/Edifício/Empresa</label>
                <input type='text' id='nunresidence' />
                <div className={styles.divradius}>
                    <input type='radio' name='residence' id='house' value='house' />
                    <label htmlFor='house'>Casa</label>
                    <input type='radio' name='residence' id='buildings' value='building' />
                    <label htmlFor='buildings'>Edifício</label>
                    <input type='radio' name='residence' id='enterprise' value='enterprise' />
                    <label htmlFor='enterprise'>Empresa</label>
                </div>
                <div className={styles.divcnpj}>
                    <label htmlFor='cnpj'>CNPJ</label>
                    <input type='text' id='cnpj' />
                </div>
                <div className={styles.divbuilding}>
                    <label htmlFor='building'>Nome do Edifício/Empresa</label>
                    <input type='text' id='building' />
                    <label htmlFor='block'>Bloco</label>
                    <input type='text' id='block' />
                    <label htmlFor='livingapartmentroom'>Apartamento/Sala</label>
                    <input type='text' id='livingapartmentroom' />
                </div>
                <label htmlFor='referencepoint'>Ponto de Referência</label>
                <textarea id='referencepoint' />
                <label htmlFor='neighborhood'>Bairro/Distrito</label>
                <input type='text' id='neighborhood' />
                <label htmlFor='city'>Cidade</label>
                <input type='text' id='city' />
            </fieldset>
            {!id &&
                <div className={styles.divbtn}>
                    {!name && <input type='submit' title='Cadastrar Doador e ir para Cadastrar Doação' className={styles.inputsubmit} value='Cad. Doad. Doação' />}
                    <input type='submit' title={name ? name + ' Doador' : 'Cadastrar Doador'} className={styles.inputsubmit} value={name ? name + ' Doador' : 'Cad. Doador'} />
                </div>
            }
        </form>
    );
};