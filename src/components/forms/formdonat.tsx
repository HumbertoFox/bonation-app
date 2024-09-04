'use client';
import { TitleValue } from '@/app/types/types';

export default function FormDonations({ title, value }: TitleValue) {

    return (
        <form className='w-[750px] p-1 max-xl:w-[380px] max-md:w-[280px]'>
            <fieldset className='flex flex-col gap-[5px]'>
                <legend className='mx-auto py-1 duration-[400ms]'>Lista de objetos a serem doados</legend>
                <div className='flex gap-[5px] max-xl:flex-col'>
                    <label htmlFor='coddonation' className='flex flex-col'>Código da Doação
                        <input type='text' id='coddonation' disabled placeholder='Código da Doação' className='rounded py-0.5 cursor-not-allowed' />
                    </label>
                    <label htmlFor='donorcode' className='flex flex-col'>Código do Doador
                        <input type='text' id='donorcode' placeholder='Código do Doador' disabled className='rounded py-0.5 cursor-not-allowed' />
                    </label>
                </div>
                <div className='flex gap-[5px] duration-[400ms] max-xl:flex-wrap'>
                    <div className='w-full flex flex-col gap-[5px] duration-[400ms]'>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input type='text' id='objeto1' placeholder='Objeto 1' className='rounded py-0.5' />
                            <input type='text' id='quant1' placeholder='Qant/Caixa/Sacola' className='w-[150px] rounded py-0.5' />
                        </div>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input type='text' id='objeto2' placeholder='Objeto 2' className='rounded py-0.5' />
                            <input type='text' id='quant2' placeholder='Qant/Caixa/Sacola' className='w-[150px] rounded py-0.5' />
                        </div>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input type='text' id='objeto3' placeholder='Objeto 3' className='rounded py-0.5' />
                            <input type='text' id='quant3' placeholder='Qant/Caixa/Sacola' className='w-[150px] rounded py-0.5' />
                        </div>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input type='text' id='objeto4' placeholder='Objeto 4' className='rounded py-0.5' />
                            <input type='text' id='quant4' placeholder='Qant/Caixa/Sacola' className='w-[150px] rounded py-0.5' />
                        </div>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input type='text' id='objeto5' placeholder='Objeto 5' className='rounded py-0.5' />
                            <input type='text' id='quant5' placeholder='Qant/Caixa/Sacola' className='w-[150px] rounded py-0.5' />
                        </div>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input type='text' id='objeto6' placeholder='Objeto 6' className='rounded py-0.5' />
                            <input type='text' id='quant6' placeholder='Qant/Caixa/Sacola' className='w-[150px] rounded py-0.5' />
                        </div>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input type='text' id='objeto7' placeholder='Objeto 7' className='rounded py-0.5' />
                            <input type='text' id='quant7' placeholder='Qant/Caixa/Sacola' className='w-[150px] rounded py-0.5' />
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-[5px] duration-[400ms]'>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input type='text' id='objeto8' placeholder='Objeto 8' className='rounded py-0.5' />
                            <input type='text' id='quant8' placeholder='Qant/Caixa/Sacola' className='w-[150px] rounded py-0.5' />
                        </div>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input type='text' id='objeto9' placeholder='Objeto 9' className='rounded py-0.5' />
                            <input type='text' id='quant9' placeholder='Qant/Caixa/Sacola' className='w-[150px] rounded py-0.5' />
                        </div>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input type='text' id='objeto10' placeholder='Objeto 10' className='rounded py-0.5' />
                            <input type='text' id='quant10' placeholder='Qant/Caixa/Sacola' className='w-[150px] rounded py-0.5' />
                        </div>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input type='text' id='objeto11' placeholder='Objeto 11' className='rounded py-0.5' />
                            <input type='text' id='quant11' placeholder='Qant/Caixa/Sacola' className='w-[150px] rounded py-0.5' />
                        </div>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input type='text' id='objeto12' placeholder='Objeto 12' className='rounded py-0.5' />
                            <input type='text' id='quant12' placeholder='Qant/Caixa/Sacola' className='w-[150px] rounded py-0.5' />
                        </div>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input type='text' id='objeto13' placeholder='Objeto 13' className='rounded py-0.5' />
                            <input type='text' id='quant13' placeholder='Qant/Caixa/Sacola' className='w-[150px] rounded py-0.5' />
                        </div>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <input type='text' id='objeto14' placeholder='Objeto 14' className='rounded py-0.5' />
                            <input type='text' id='quant14' placeholder='Qant/Caixa/Sacola' className='w-[150px] rounded py-0.5' />
                        </div>
                    </div>
                </div>
                <textarea id='obs' placeholder='Observações' className='rounded py-0.5 h-20' />
            </fieldset >
            {(value === 'Cadastrar' || value === 'Editar') && <div className='flex'>
                <input type='submit' title={title} value={value} className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3' />
                {title === 'Cadastrar Doação' && <input type='submit' title='Cadastrar Doação e ir para Agendar Coleta' value='Agendar' className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3' />}
            </div>
            }
        </form >
    );
};