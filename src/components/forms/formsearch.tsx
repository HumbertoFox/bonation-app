'use client';
import { FormSearch, InputSearch } from '@/app/types/types';
import { SubmitHandler, useForm } from 'react-hook-form';
export default function FormSearchs({ search }: FormSearch) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit: SubmitHandler<InputSearch> = (data: any) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-1 w-[280px]'>
            <legend className='mx-auto py-1 duration-[400ms]'>{search}</legend>
            {search === 'Pesquisar Doador' && <div className='flex flex-col'>
                <input type='search' placeholder={errors.codnametel ? 'Campo Obrigatório' : 'Nome/Telefone/Código'} className={errors.codnametel ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('codnametel', { required: true })} />
                <div className='flex'>
                    <input type='submit' value='Código' className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3' />
                    <input type='submit' value='Nome' className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3' />
                    <input type='submit' value='Telefone' className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3' />
                </div>
            </div>
            }
            {search === 'Código da Doação' && <div className='flex flex-col'>
                <input type='search' placeholder={errors.coddonation ? 'Campo Obrigatório' : 'Código da Doação'} className={errors.coddonation ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('coddonation', { required: true })} />
                <input type='submit' value='Pesquisar' className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3' />
            </div>
            }
        </form>
    );
};