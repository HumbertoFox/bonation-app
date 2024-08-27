'use client';
import FormDonations from '@/components/forms/formdonat';

export default function EditDonationPage() {
    return (
        <div className='flex duration-[400ms] max-md:flex-col'>
            <FormDonations title='Editar Doação' value='Editar' />
        </div>
    );
};