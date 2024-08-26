'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import FormFull from '@/components/forms/form';

export default function RegisterVehiclePage() {
    return (
        <section className='flex flex-col items-center gap-[50px]'>
            <h1 className='text-blue-600 font-bold text-xl'>Cadastrar Usuário</h1>
            <FontAwesomeIcon icon={faTruck} className='text-[75px] text-[green]' />
            <FormFull title='Cadastrar Veículo' value='Cadastrar'  page='Menu' />
        </section>
    );
};