'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import FormFull from '@/components/forms/form';
export default function RegisterDriverPage() {
    return (
        <section className='flex flex-col items-center gap-[50px]'>
            <h1 className='text-blue-600 font-bold text-xl'>Cadastrar Motorista</h1>
            <FontAwesomeIcon icon={faIdCard} className='text-[75px] text-[green]' />
            <FormFull title='Cadastrar Motorista' value='Cadastrar' page='Menu' subpage='Registerdriver' searchDonorCodTel={null} />
        </section>
    );
};