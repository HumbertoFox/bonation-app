'use client';
import { useState } from 'react';
import { CodResponse } from '@/app/types/types';
import FormDonations from '@/components/forms/formdonat';
import FormSearchs from '@/components/forms/formsearch';
export default function EditDonationPage() {
    const [searchDonationCod, setSearchDonationCod] = useState<CodResponse | null>(null);
    const handleCodSearch = (response: CodResponse) => {
        setSearchDonationCod(response);
    };
    return (
        <div className='flex flex-col duration-[400ms]'>
            <FormSearchs search='Código da Doação' searchDonorCodTel={handleCodSearch} />
            <FormDonations title='Editar Doação' value='Editar' searchDonationCod={searchDonationCod} />
        </div>
    );
};