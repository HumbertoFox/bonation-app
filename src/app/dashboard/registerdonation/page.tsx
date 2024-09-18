'use client';
import { useState } from 'react';
import { CodTelResponse } from '@/app/types/types';
import FormFull from '@/components/forms/form';
import FormDonations from '@/components/forms/formdonat';
import FormSearchs from '@/components/forms/formsearch';
export default function RegisterDonationPage() {
    const [searchDonorCodTel, SetSearchDonorCodTel] = useState<CodTelResponse | null>(null);
    const handleCodTelSearch = (response: CodTelResponse) => {
        SetSearchDonorCodTel(response);
    };
    return (
        <div className='flex duration-[400ms] max-md:flex-col'>
            <div>
                <FormSearchs search='Pesquisar Doador' searchDonorCodTel={handleCodTelSearch} />
                <FormFull title='Editar Doador' value='Donation' page='Dashboard' subpage='registerdonation' searchDonorCodTel={searchDonorCodTel} />
            </div>
            <FormDonations title='Cadastrar Doação' value='Cadastrar' searchDonationCod searchDonorResult={searchDonorCodTel} />
        </div>
    );
};