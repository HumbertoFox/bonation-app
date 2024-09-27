'use client';
import { useState } from 'react';
import { HelperResponse } from '@/app/types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import FormFull from '@/components/forms/form';
import FormSearchs from '@/components/forms/formsearch';
export default function EditHelperPage() {
    const [searchUserCpf, setSearchUserCpf] = useState<HelperResponse | null>(null);
    const handleCpfSearch = (response: HelperResponse) => {
        setSearchUserCpf(response);
    };
    return (
        <section className='flex flex-col items-center gap-[50px]'>
            <h1 className='text-blue-600 font-bold text-xl'>Editar Ajudante</h1>
            <FormSearchs search='Pesquisar Ajudante' searchDonorCodTel={handleCpfSearch} />
            <FontAwesomeIcon icon={faChalkboardUser} className='text-[75px] text-[green]' />
            <FormFull title='Editar Ajudante' value='Editar' page='Menu' subpage='Edithelper' searchDonorCodTel={searchUserCpf} />
        </section>

    );
};