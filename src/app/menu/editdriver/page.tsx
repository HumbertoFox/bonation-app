'use client';
import { useState } from 'react';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { DriverResponse } from '@/app/types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormFull from '@/components/forms/form';
import FormSearchs from '@/components/forms/formsearch';
export default function EditDriverPage() {
    const [searchUserCpf, setSearchUserCpf] = useState<DriverResponse | null>(null);
    const handleCpfSearch = (response: DriverResponse) => {
        setSearchUserCpf(response);
    };
    return (
        <section className='flex flex-col items-center gap-[50px]'>
            <h1 className='text-blue-600 font-bold text-xl'>Editar Motorista</h1>
            <FormSearchs search='Pesquisar Motorista' searchDonorCodTel={handleCpfSearch} />
            <FontAwesomeIcon icon={faUserPen} className='text-[75px] text-[green]' />
            <FormFull title='Editar Motorista' value='Editar' page='Menu' subpage='Editdriver' searchDonorCodTel={searchUserCpf} />
        </section>
    );
};