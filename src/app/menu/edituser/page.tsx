'use client';
import { useState } from 'react';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { UserResponse } from '@/app/types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormFull from '@/components/forms/form';
import FormSearchs from '@/components/forms/formsearch';
export default function EditUserPage() {
    const [searchUserCpf, setSearchUserCpf] = useState<UserResponse | null>(null);
    const handleCpfSearch = (response: UserResponse) => {
        setSearchUserCpf(response);
    };
    return (
        <section className='flex flex-col items-center gap-[50px]'>
            <h1 className='text-blue-600 font-bold text-xl'>Editar Usuário</h1>
            <FormSearchs search='Pesquisar Usuário' searchDonorCodTel={handleCpfSearch} />
            <FontAwesomeIcon icon={faUserPen} className='text-[75px] text-[green]' />
            <FormFull title='Editar Usuário' value='Editar' page='Menu' subpage='Edituser' searchDonorCodTel={searchUserCpf} />
        </section>
    );
};