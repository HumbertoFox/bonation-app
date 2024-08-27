'use client';
import FormFull from '@/components/forms/form';
import FormDonations from '@/components/forms/formdonat';

export default function RegisterDonationPage() {
    return (
        <div className='flex duration-[400ms] max-md:flex-col'>
            <FormFull title='Editar Doador' value='Donation' page='Donation'/>
            <FormDonations title='Cadastrar Doação' value='Cadastrar' />
        </div>
    );
};