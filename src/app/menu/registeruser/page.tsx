'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import FormFull from '@/components/forms/form';

export default function RgisterUserPage() {
    return (
        <section className='flex flex-col items-center gap-[50px]'>
            <h1 className='text-blue-600 font-bold text-xl'>Cadastrar Usuário</h1>
            <FontAwesomeIcon icon={faUserPlus} className='text-[75px] text-[green]' />
            <FormFull title='Cadastrar Usuário' value='Cadastrar' />
        </section>
    );
};