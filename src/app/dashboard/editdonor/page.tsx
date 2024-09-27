'use client';
import { useState } from 'react';
import { CodTelResponse } from '@/app/types/types';
import FormFull from '@/components/forms/form';
import FormSearchs from '@/components/forms/formsearch';
export default function EditDonorPage() {
    const [searchDonorCodTel, setSearchDonorCodTel] = useState<CodTelResponse | null>(null);
    const handleCodTelSearch = (response: CodTelResponse) => {
        setSearchDonorCodTel(response);
    };
    return (
        <>
            <FormSearchs search='Pesquisar Doador' searchDonorCodTel={handleCodTelSearch} />
            <FormFull title='Editar Doador' value='Editar' page='Dashboard' subpage='editdonor' searchDonorCodTel={searchDonorCodTel} />
        </>
    );
};