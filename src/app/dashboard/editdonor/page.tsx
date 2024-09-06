import FormFull from '@/components/forms/form';
import FormSearchs from '@/components/forms/formsearch';
export default function EditDonorPage() {
    return (
        <div>
            <FormSearchs search='Pesquisar Doador' />
            <FormFull title='Editar Doador' value='Editar' page='Dashboard' subpage='editdonor' />
        </div>
    );
};