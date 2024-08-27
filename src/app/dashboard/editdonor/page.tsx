import FormFull from '@/components/forms/form';
import FormSearch from '@/components/forms/formsearch';

export default function EditDonorPage() {
    return (
        <div>
            <FormSearch search='Pesquisar Doador' />
            <FormFull title='Editar Doador' value='Editar' page='Dashboard' />
        </div>
    );
};