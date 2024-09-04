'use client';
import FormFull from '@/components/forms/form';
import FormDonations from '@/components/forms/formdonat';
import FormSearchs from '@/components/forms/formsearch';

export default function RegisterDonationPage() {
    return (
        <div className='flex duration-[400ms] max-md:flex-col'>
            <div>
                <FormSearchs search='Pesquisar Doador' />
                <FormFull title='Editar Doador' value='Donation' page='Donation' />
            </div>
            <FormDonations title='Cadastrar Doação' value='Cadastrar' />
        </div>
    );
};