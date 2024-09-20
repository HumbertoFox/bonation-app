'use client';
import { InputsDonationsProps, TitleValueProps } from '@/app/types/types';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
export default function FormDonations({ title, value, searchDonationCod, searchDonorResult }: TitleValueProps) {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit: SubmitHandler<InputsDonationsProps> = async (data: any) => {
        console.log(data);
    };
    const createInputsFields = (count: number, startIndex: number) => (
        Array.from({ length: count }, (_, index) => (
            <div className='w-full flex gap-[5px] max-md:flex-col' key={index}>
                <input type='text' placeholder={`Objeto ${startIndex + index}`} className='rounded py-0.5' {...register(`objeto${startIndex + index}`)} />
                <input type='text' placeholder={'Qant/Caixa/Sacola'} className='w-[150px] rounded py-0.5' {...register(`quant${startIndex + index}`)} />
            </div>
        ))
    );
    useEffect(() => {
        setValue('donorcode', searchDonorResult?.donor_id);
    }, [searchDonorResult, setValue]);
    return (
        <form className='w-[750px] p-1 max-xl:w-[380px] max-md:w-[280px]' onSubmit={handleSubmit(onSubmit)}>
            <fieldset className='flex flex-col gap-[5px]'>
                <legend className='mx-auto py-1 duration-[400ms] drop-shadow-[1px_1px_0.5px_#AAF998]'>Lista de objetos a serem doados</legend>
                <div className='flex gap-[5px] max-xl:flex-col'>
                    {title !== 'Cadastrar Doação' && (
                        <label htmlFor='coddonation' className='flex flex-col cursor-not-allowed'>Código da Doação
                            <input
                                type='text'
                                id='coddonation'
                                disabled placeholder={errors.coddonation ? 'Campo Obrigatório' : 'Código da Doação'}
                                className={errors.coddonation ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5 cursor-not-allowed'}
                                {...register('coddonation', { required: true })}
                            />
                        </label>
                    )}
                    <label htmlFor='donorcode' className='flex flex-col cursor-not-allowed'>Código do Doador
                        <input
                            type='text'
                            id='donorcode'
                            placeholder={errors.donorcode ? 'Campo Obrigatório' : 'Código do Doador'}
                            disabled
                            className={errors.donorcode ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5 cursor-not-allowed'}
                            {...register('donorcode', { required: true })}
                        />
                    </label>
                </div>
                <div className='flex gap-[5px] duration-[400ms] max-xl:flex-wrap'>
                    <div className='w-full flex flex-col gap-[5px] duration-[400ms]'>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input
                                type='text'
                                id='objeto1'
                                placeholder={errors.objeto1 ? 'Campo Obrigatório' : 'Objeto 1'}
                                className={errors.objeto1 ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'}
                                {...register('objeto1', { required: true })}
                            />
                            <input
                                type='text'
                                id='quant1'
                                placeholder={errors.quant1 ? 'Campo Obrigatório' : 'Qant/Caixa/Sacola'}
                                className={errors.quant1 ? 'w-[150px] rounded py-0.5 border-red-600 placeholder-red-600' : 'w-[150px] rounded py-0.5'}
                                {...register('quant1', { required: true })}
                            />
                        </div>
                        {createInputsFields(6, 2)}
                    </div>
                    <div className='w-full flex flex-col gap-[5px] duration-[400ms]'>
                        {createInputsFields(7, 8)}
                    </div>
                </div>
                <textarea id='obs' placeholder='Observações' className='rounded py-0.5 h-20' />
            </fieldset >
            {(value === 'Cadastrar' || value === 'Editar') && (
                <div className='flex'>
                    <input
                        type='submit'
                        title={title}
                        value={value}
                        className='bg-blue-600 text-white font-bold py-1 px-2 duration-[400ms] cursor-pointer mx-auto rounded drop-shadow-[1px_1px_0.5px_#AAF998] hover:bg-green-600 hover:drop-shadow-[1px_1px_0.5px_#79D1FF] active:bg-blue-600 active:text-black mt-3'
                    />
                    {title === 'Cadastrar Doação' && (
                        <input
                            type='submit'
                            title='Cadastrar Doação e ir para Agendar Coleta'
                            value='Agendar'
                            className='bg-blue-600 text-white font-bold py-1 px-2 duration-[400ms] cursor-pointer mx-auto rounded drop-shadow-[1px_1px_0.5px_#AAF998] hover:bg-green-600 hover:drop-shadow-[1px_1px_0.5px_#79D1FF] active:bg-blue-600 active:text-black mt-3'
                        />
                    )}
                </div>
            )}
        </form >
    );
};