'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface TitleValue {
    title: string;
    value: string;
};

export default function FormFull({ title, value }: TitleValue) {
    const router = useRouter();
    const [ispassword, setIspassword] = useState<boolean>(false);
    const [ispasswordchecked, setIspasswordchecked] = useState<boolean>(false);
    const handlePassword = () => setIspassword(!ispassword);
    const handlePasswordChecked = () => setIspasswordchecked(!ispasswordchecked);

    return (
        <form>
            {title === 'Cadastrar Veículo' && <div className='flex flex-col gap-[0.313rem]'>
                <input type='text' id='modelo' placeholder='Modelo' className='rounded py-0.5' />
                <input type='text' id='chassi' placeholder='Chassi' className='rounded py-0.5' />
                <input type='text' id='plate' placeholder='Placa' className='rounded py-0.5' />
                <input type='number' id='km' placeholder='Km' className='rounded py-0.5' />
            </div>
            }
            {title !== 'Cadastrar Veículo' && <fieldset disabled={false} className='flex flex-col gap-[0.313rem]'>
                {title.includes('Doador') && <legend className='mx-auto py-1 duration-[400ms]'>Informações do Doador</legend>}
                {title === 'Editar Doador' && <input type='text' id='donorcode' disabled placeholder='Código do Doador' className='rounded py-0.5 cursor-not-allowed' />}
                {title !== 'Entrar' && <input type='text' id='name' placeholder='Nome' className='rounded py-0.5' />}
                {title.includes('Doador') && <div className='flex flex-col gap-[0.313rem]'>
                    <input type='tel' id='contact1' placeholder='Contato do Responsável' className='rounded py-0.5' />
                    <input type='tel' id='contact2' placeholder='Contato do Responsável/Opcional' className='rounded py-0.5' />
                    <input type='tel' id='contact3' placeholder='Contato/Opcional ou Ramal' className='rounded py-0.5' />
                </div>}
                {title !== 'Cadastrar Doador' && <input type='text' placeholder='CPF' className='rounded py-0.5' />}
                {title === 'Cadastrar Motorista' && <input type='number' id='cnh' placeholder='CNH' className='rounded py-0.5' />}
                {title !== 'Entrar' && <div className='flex flex-col gap-[0.313rem]'>
                    <input type='number' id='zipcode' placeholder='CEP' className='rounded py-0.5' />
                    <input type='text' id='street' placeholder='Logradouro: Av/Rua/Trav' className='rounded py-0.5' />
                    <input type='text' id='neighborhod' placeholder='Bairro/Distrito' className='rounded py-0.5' />
                    <input type='text' id='city' placeholder='Cidade' className='rounded py-0.5' />
                    <input type='text' id='nunresidence' placeholder='Nº Casa/Edifício' className='rounded py-0.5' />
                    <div className='flex gap-5 justify-center p-1'>
                        <label htmlFor='house' className='flex items-center cursor-pointer'>
                            <input type='radio' name='residence' id='house' value='house' className='mr-1.5' />
                            Casa
                        </label>
                        <label htmlFor='buildings' className='flex items-center cursor-pointer'>
                            <input type='radio' name='residence' id='buildings' value='building' className='mr-1.5' />
                            Edifício
                        </label>
                        {title.includes('Doador') && <label htmlFor='enterprise' className='flex items-center cursor-pointer'>
                            <input type='radio' name='residence' id='enterprise' value='enterprise' className='mr-1.5' />
                            Empresa
                        </label>}
                    </div>
                    {title.includes('Doador') && <input type='text' id='cnpj' placeholder='CNPJ' className='rounded py-0.5' />}
                    <div className='flex flex-col gap-[0.313rem]'>
                        <input type='text' id='building' placeholder='Nome do Edifício' className='rounded py-0.5' />
                        <input type='text' id='block' placeholder='Bloco' className='rounded py-0.5' />
                        <input type='text' id='livingapartmentroom' placeholder='Apartamento/Sala' className='rounded py-0.5' />
                    </div>
                    {title.includes('Doador') && <textarea id='referencepoint' placeholder='Ponto de Referência' className='rounded py-0.5 h-20' />}
                </div>
                }
                {(title === 'Entrar' || title === 'Cadastrar Usuário') && <div>
                    <input type={ispassword ? 'text' : 'password'} id='password' placeholder='Senha' className='rounded py-0.5' />
                    <button type='button' onClick={handlePassword} className='relative'>
                        {!ispassword && <FontAwesomeIcon icon={faEye} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                        {ispassword && <FontAwesomeIcon icon={faEyeSlash} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                    </button>
                </div>
                }
                {title === 'Cadastrar Usuário' && <div>
                    <input type={ispasswordchecked ? 'text' : 'password'} id='passwordcheck' placeholder='Confirmar Senha' className='rounded py-0.5' />
                    <button type='button' onClick={handlePasswordChecked} className='relative'>
                        {!ispasswordchecked && <FontAwesomeIcon icon={faEye} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                        {ispasswordchecked && <FontAwesomeIcon icon={faEyeSlash} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                    </button>
                </div>
                }
            </fieldset>
            }
            <div className='flex'>
                <input title={title} type='submit' value={value} className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3' />
                {title !== 'Entrar' && <button type='button' title='Voltar ao Menu' onClick={() => router.push('/menu')} className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3'>Menu</button>}
            </div>
        </form>
    );
};