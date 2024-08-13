import styles from '@/app/components/style/sidebar.module.css';

export default function SideBarReport() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebardiv}>
                <select title='Selecione Dia Inicio' name='days' id='days'><option>Dia Inicio</option></select>
                <select title='Selecione Dia Fim' name='daye' id='daye'><option>Dia Fim</option></select>
                <select title='Selecione Mês Inicio' name='months' id='months'><option>Mês Inicio</option></select>
                <select title='Selecione Mês Fim' name='monthe' id='monthe'><option>Mês Fim</option></select>
                <select title='Selecione Veículo' name='vehicle' id='vehicle'><option>Veiculo</option></select>
                <select title='Selecione Motorista' name='driver' id='driver'><option>Motorista</option></select>
                <select title='Selecione Atendente' name='attendant' id='attendant'><option>Atendente</option></select>
                <select title='Selecione Objeto' name='object' id='object'><option>Objeto</option></select>
                <select title='Selecione Doador' name='donor' id='donor'><option>Doador</option></select>
            </div>
        </div>
    );
};