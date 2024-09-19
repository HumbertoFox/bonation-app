'use client';
import { useEffect, useState } from 'react';
import { SearchDonor } from '@/app/api/actions/search_donor';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AlertMessageState, FormSearch, InputSearch } from '@/app/types/types';
import AlertMessage from '../alert/alert';
export default function FormSearchs({ search, searchDonorCodTel }: FormSearch) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [codTelSearch, setCodTelSearch] = useState<any>('');
    const [alertMsg, setAlertMsg] = useState<AlertMessageState | null>(null);
    const handleEventAlertClose = () => setAlertMsg(null);
    const onSubmit: SubmitHandler<InputSearch> = async (data: any) => {
        try {
            const formData = new FormData();
            Object.keys(data).forEach(key => {
                formData.append(key, data[key as keyof InputSearch]);
            });
            let response;
            switch (search) {
                case 'Pesquisar Doador':
                    response = await SearchDonor(formData);
                    break;
            };
            if (response?.Error === false) {
                setCodTelSearch(response);
                setAlertMsg(response);
            } else if (response?.Error === true) {
                setAlertMsg(response);
            };
        } catch (error) {
            console.error('Erro ao Conectar ao Banco:', error);
            setAlertMsg({
                Error: true,
                message: 'Erro ao Conectar ao Banco!'
            });
        };
    };
    useEffect(() => {
        if (codTelSearch) {
            const result = Object.values(codTelSearch);
            searchDonorCodTel(result[3]);
        };
    }, [codTelSearch, searchDonorCodTel]);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-1 w-[280px]'>
            <legend className='mx-auto py-1 duration-[400ms] drop-shadow-[1px_1px_0.5px_#AAF998]'>{search}</legend>
            {search === 'Pesquisar Doador' && <div className='flex flex-col'>
                <input type='search' placeholder={errors.codtel ? 'Campo Obrigatório' : 'Telefone/Código só números'} className={errors.codtel ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('codtel', { required: true, maxLength: 11, pattern: /\d/g })} />
                <div className='flex'>
                    <input title={search} type='submit' value='Cód ou Tel' className='bg-blue-600 text-white font-bold py-1 px-2 duration-[400ms] cursor-pointer mx-auto rounded drop-shadow-[1px_1px_0.5px_#AAF998] hover:bg-green-600 hover:drop-shadow-[1px_1px_0.5px_#79D1FF] active:bg-blue-600 active:text-black mt-3' />
                </div>
            </div>
            }
            {search === 'Código da Doação' && <div className='flex flex-col'>
                <input type='search' placeholder={errors.coddonation ? 'Campo Obrigatório' : 'Código da Doação só número'} className={errors.coddonation ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('coddonation', { required: true })} />
                <input title={search} type='submit' value='Pesquisar' className='bg-blue-600 text-white font-bold py-1 px-2 duration-[400ms] cursor-pointer mx-auto rounded drop-shadow-[1px_1px_0.5px_#AAF998] hover:bg-green-600 hover:drop-shadow-[1px_1px_0.5px_#79D1FF] active:bg-blue-600 active:text-black mt-3' />
            </div>
            }
            {alertMsg && (<AlertMessage {...alertMsg} onClose={handleEventAlertClose} />)}
        </form>
    );
};