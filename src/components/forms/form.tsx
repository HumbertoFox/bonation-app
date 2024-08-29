'use client';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { viaCepApi } from '@/app/api/viacep/viacep';

interface TitleValuePage {
    title: string;
    value: string;
    page: string;
};

interface Inputs {

};

interface ZipCodeValue {
    street: string;
    district: string;
    city: string;
};

export default function FormFull({ title, value, page }: TitleValuePage) {
    const router = useRouter();
    const [age, setAge] = useState<number>(0);
    const [ispassword, setIspassword] = useState<boolean>(false);
    const [ispasswordchecked, setIspasswordchecked] = useState<boolean>(false);
    const [zipCodeValue, setZipCodeValue] = useState<ZipCodeValue>({ street: '', district: '', city: '' });
    const emailInputRef = useRef<HTMLInputElement>(null);
    const numResidInputRef = useRef<HTMLInputElement>(null);
    const handleInputChange = (element: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = element.target;
        setZipCodeValue((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };
    const handlePassword = () => setIspassword(!ispassword);
    const handlePasswordChecked = () => setIspasswordchecked(!ispasswordchecked);
    const calculateAge = (data: string) => {
        const birthDate = new Date(data);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        };
        return age;
    };
    const handleDateChange = (element: ChangeEvent<HTMLInputElement>) => {
        const data = element.target.value;
        if (data) {
            const calculatedAge = calculateAge(data);
            setAge(calculatedAge);
        } else {
            setAge(0);
        };
    };
    const checkedZipCode = async (element: ChangeEvent<HTMLInputElement>) => {
        const clearZipCode = () => {
            setZipCodeValue({ street: '', district: '', city: '' });
        };
        if (!element.target.value) {
            clearZipCode();
            emailInputRef.current?.focus();
            alert('Formato de CEP inválido.');
            return;
        };
        const zipcode = element.target.value.replace(/\D/g, '');
        var validazipcode = /^[0-9]{8}$/;
        try {
            if (validazipcode.test(zipcode)) {
                const data = await viaCepApi(zipcode);
                if (data && !data.erro) {
                    setZipCodeValue({
                        street: data.logradouro,
                        district: data.bairro,
                        city: data.localidade
                    });
                    numResidInputRef.current?.focus();
                } else {
                    clearZipCode();
                    emailInputRef.current?.focus();
                    alert('CEP não encontrado.');
                }
            } else {
                clearZipCode();
                emailInputRef.current?.focus();
                alert('Formato de CEP inválido.');
            }
        } catch (error) {
            console.error(error);
            clearZipCode();
            emailInputRef.current?.focus();
            alert(`Formato de CEP inválido ou não encontrado.`);
            return;
        };
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit} className='p-1 w-[280px]'>
            {title === 'Cadastrar Veículo' && <div className='flex flex-col gap-[5px]'>
                <input type='text' name='modelo' id='modelo' placeholder='Modelo' className='rounded py-0.5' />
                <input type='text' name='chassi' id='chassi' placeholder='Chassi' className='rounded py-0.5' />
                <input type='text' name='plate' id='plate' placeholder='Placa' className='rounded py-0.5' />
                <input type='number' id='km' placeholder='Km' className='rounded py-0.5' />
            </div>
            }
            {title !== 'Cadastrar Veículo' && <fieldset disabled={value === 'Donation' ? true : false} className='flex flex-col gap-[5px]'>
                {title.includes('Doador') && <legend className='mx-auto py-1 duration-[400ms]'>Informações do Doador</legend>}
                {title === 'Editar Doador' && <input type='text' name='donorcode' id='donorcode' disabled placeholder='Código do Doador' className='rounded py-0.5 cursor-not-allowed' />}
                {title !== 'Entrar' && <input type='text' name='name' id='name' placeholder='Nome' className='rounded py-0.5' />}
                {page === 'Menu' && <div className='flex gap-1'>
                    <label htmlFor='dateofbirth'>Data de Nascimento
                        <input type='date' name='dateofbirth' id='dateofbirth' className='w-full rounded py-0.5' onBlur={handleDateChange} />
                    </label>
                    <div className='flex flex-col justify-end items-center'>
                        <p>{age}</p>
                        <p>anos</p>
                    </div>
                </div>
                }
                {(page === 'Menu' || page === 'Login') && <input type='text' name='cpf' id='cpf' placeholder='CPF' className='rounded py-0.5' />}
                {page !== 'Login' && <input type='tel' name='telephone' id='telephone' placeholder={page !== 'Menu' ? 'Contato do Responsável' : 'Telefone'} className='rounded py-0.5' />}
                {(page === 'Donation' || page === 'Dashboard') && <div className='flex flex-col gap-[5px]'>
                    <input type='tel' name='contact1' id='contact1' placeholder='Contato do Responsável/Opcional' className='rounded py-0.5' />
                    <input type='tel' name='contact2' id='contact2' placeholder='Contato/Opcional ou Ramal' className='rounded py-0.5' />
                </div>
                }
                {page === 'Menu' && <input type='email' name='email' id='email' placeholder='Email' ref={emailInputRef} className='rounded py-0.5' />}
                {title === 'Cadastrar Motorista' && <input type='number' name='cnh' id='cnh' placeholder='CNH' className='rounded py-0.5' />}
                {title !== 'Entrar' && <div className='flex flex-col gap-[5px]'>
                    <input type='number' name='zipcode' id='zipcode' placeholder='CEP' className='rounded py-0.5' onBlur={checkedZipCode} />
                    <input type='text' name='street' id='street' placeholder='Logradouro: Av/Rua/Trav' value={zipCodeValue.street} onChange={handleInputChange} className='rounded py-0.5' />
                    <input type='text' name='district' id='district' placeholder='Bairro/Distrito' value={zipCodeValue.district} onChange={handleInputChange} className='rounded py-0.5' />
                    <input type='text' name='city' id='city' placeholder='Cidade' value={zipCodeValue.city} onChange={handleInputChange} className='rounded py-0.5' />
                    <input type='text' name='nunresidence' id='nunresidence' placeholder='Nº Casa/Edifício' ref={numResidInputRef} className='rounded py-0.5' />
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
                        </label>
                        }
                    </div>
                    {title.includes('Doador') && <input type='text' name='cnpj' id='cnpj' placeholder='CNPJ' className='rounded py-0.5' />}
                    <div className='flex flex-col gap-[5px]'>
                        <input type='text' name='building' id='building' placeholder='Nome do Edifício' className='rounded py-0.5' />
                        <input type='text' name='block' id='block' placeholder='Bloco' className='rounded py-0.5' />
                        <input type='text' name='livingapartmentroom' id='livingapartmentroom' placeholder='Apartamento/Sala' className='rounded py-0.5' />
                    </div>
                    {title.includes('Doador') && <textarea name='referencepoint' id='referencepoint' placeholder='Ponto de Referência' className='rounded py-0.5 h-20' />}
                </div>
                }
                {(title === 'Entrar' || title === 'Cadastrar Usuário') && <div>
                    <input type={ispassword ? 'text' : 'password'} name='password' id='password' placeholder='Senha' className='w-full rounded py-0.5' />
                    <button type='button' onClick={handlePassword} className='relative'>
                        {!ispassword && <FontAwesomeIcon icon={faEye} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                        {ispassword && <FontAwesomeIcon icon={faEyeSlash} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                    </button>
                </div>
                }
                {title === 'Cadastrar Usuário' && <div>
                    <input type={ispasswordchecked ? 'text' : 'password'} id='passwordcheck' placeholder='Confirmar Senha' className='w-full rounded py-0.5' />
                    <button type='button' onClick={handlePasswordChecked} className='relative'>
                        {!ispasswordchecked && <FontAwesomeIcon icon={faEye} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                        {ispasswordchecked && <FontAwesomeIcon icon={faEyeSlash} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                    </button>
                </div>
                }
            </fieldset>
            }
            {value !== 'Donation' && <div className='flex'>
                <input title={title} type='submit' value={value} className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3' />
                {title === 'Cadastrar Doador' && <input title='Cadastrar e ir para Cadastrar Doação' type='submit' value='Doação' className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3' />}
                {page === 'Menu' && <button type='button' title='Voltar ao Menu' onClick={() => router.push('/menu')} className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3'>Menu</button>}
            </div>
            }
        </form>
    );
};