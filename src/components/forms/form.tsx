'use client';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { viaCepApi } from '@/app/api/viacep/viacep';
import { AlertMessageState, Inputs, TitleValuePage } from '@/app/types/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import AlertMessage from '../alert/alert';
export default function FormFull({ title, value, page }: TitleValuePage) {
    const { register, handleSubmit, setValue, setFocus, setError, watch, formState: { errors } } = useForm();
    const router = useRouter();
    const password = watch('password');
    const [radioSelectHbe, setRadioSelectHbe] = useState<string>('house');
    const [radioSelectIsBloking, setRadioSelectIsBloking] = useState<string>('false')
    const [age, setAge] = useState<number>(0);
    const [ispassword, setIspassword] = useState<boolean>(false);
    const [ispasswordchecked, setIspasswordchecked] = useState<boolean>(false);
    const [alertMsg, setAlertMsg] = useState<AlertMessageState | null>(null);
    const swapRadioSelectHbe = (element: ChangeEvent<HTMLInputElement>) => {
        const selectValue = element.target.value;
        setRadioSelectHbe(selectValue);
    };
    const swapRadioSelectIsBloking = (element: ChangeEvent<HTMLInputElement>) => {
        const selectValue = element.target.value;
        setRadioSelectIsBloking(selectValue);
    };
    const handleEventAlertClose = () => setAlertMsg(null);
    const getCheckedCpf = (data: string) => {
        const isRepeatedCpf = (cpf: string) => {
            const firstDigit = cpf[0];
            return cpf.split('').every(digit => digit === firstDigit);
        };
        if (isRepeatedCpf(data)) {
            return;
        };
        const calculateCheckDigit = (input: string) => {
            let sum = 0;
            for (let i = 0; i < input.length; i++) {
                const digit = input.charAt(i);
                const weight = (input.length + 1 - i);
                sum += Number(digit) * weight;
            };
            const remainder = sum % 11;
            return remainder < 2 ? '0' : (11 - remainder);
        };
        let primaryCheckDigit = calculateCheckDigit(data.substring(0, 9));
        let secondaryCheckDigit = calculateCheckDigit(data.substring(0, 9) + primaryCheckDigit);
        let correctCpf = data.substring(0, 9) + primaryCheckDigit + secondaryCheckDigit;
        return data === correctCpf;
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
            setValue('zipcode', '');
            setValue('street', '');
            setValue('district', '');
            setValue('city', '');
        };
        if (!element.target.value) {
            clearZipCode();
            setFocus('email');
            setAlertMsg({
                Error: true,
                message: 'Formato de CEP inválido!'
            });
            return;
        };
        const zipcode = element.target.value.replace(/\D/g, '');
        var validazipcode = /^[0-9]{8}$/;
        try {
            if (validazipcode.test(zipcode)) {
                const data = await viaCepApi(zipcode);
                if (data && !data.erro) {
                    setValue('street', data.logradouro);
                    setValue('district', data.bairro);
                    setValue('city', data.localidade);
                    setFocus('nunresidence');
                } else {
                    clearZipCode();
                    setFocus('email');
                    setAlertMsg({
                        Error: true,
                        message: 'CEP não encontrado!'
                    });
                }
            } else {
                clearZipCode();
                setFocus('email');
                setAlertMsg({
                    Error: true,
                    message: 'Formato de CEP inválido!'
                });
            }
        } catch (error) {
            console.error(error);
            clearZipCode();
            setFocus('email');
            setAlertMsg({
                Error: true,
                message: 'Formato de CEP inválido ou não encontrado!'
            });
            return;
        };
    };
    const onSubmit: SubmitHandler<Inputs> = (data: any) => {
        const cpf = data.cpf as string;
        if (!getCheckedCpf(cpf)) {
            setError('cpf', { type: 'focus' }, { shouldFocus: true });
            return;
        };
        console.log(data);
    };
    return (
        <form className='p-1 w-[280px]' onSubmit={handleSubmit(onSubmit)}>
            {title === 'Cadastrar Veículo' && <div className='flex flex-col gap-[5px]'>
                <input type='text' placeholder={errors.modelo ? 'Campo Obrigatório' : 'Modelo'} className={errors.modelo ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('modelo', { required: true })} />
                <input type='text' placeholder={errors.chassi ? 'Campo Obrigatório' : 'Chassi'} className={errors.chassi ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('chassi', { required: true })} />
                <input type='text' placeholder={errors.plate ? 'Campo Obrigatório' : 'Placa'} className={errors.plate ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('plate', { required: true })} />
                <input type='number' placeholder={errors.km ? 'Campo Obrigatório' : 'Km'} className={errors.km ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('km', { required: true })} />
            </div>
            }
            {title !== 'Cadastrar Veículo' && <fieldset className='flex flex-col gap-[5px]' disabled={value === 'Donation' ? true : false}>
                {title.includes('Doador') && <legend className='mx-auto py-1 duration-[400ms]'>Informações do Doador</legend>}
                {title === 'Editar Doador' && <input type='text' disabled placeholder='Código do Doador' className='rounded py-0.5 cursor-not-allowed' {...register('donorcode', { required: true })} />}
                {title !== 'Entrar' && <input type='text' placeholder={errors.name ? 'Campo Obrigatório' : 'Nome'} className={errors.name ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('name', { required: true })} />}
                {page === 'Menu' && <div className='flex gap-1'>
                    <label htmlFor='dateofbirth'>Data de Nascimento
                        <input type='date' className={errors.dateofbirth ? 'w-full rounded py-0.5 border-red-600 placeholder-red-600' : 'w-full rounded py-0.5'} {...register('dateofbirth', { required: true, onChange: handleDateChange })} />
                    </label>
                    <div className='flex flex-col justify-end items-center'>
                        <p>{age}</p>
                        <p>anos</p>
                    </div>
                </div>
                }
                {(page === 'Menu' || page === 'Login') && <input type='text' placeholder={errors.cpf ? 'Campo Obrigatório' : 'CPF'} className={errors.cpf ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('cpf', { required: true, maxLength: 11, pattern: /\d{11}/g })} />}
                {page !== 'Login' && <input type='tel' placeholder={errors.telephone ? 'Campo Obrigatório' : page !== 'Menu' ? 'Contato do Responsável' : 'Telefone'} className={errors.telephone ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('telephone', { required: true, maxLength: 11, pattern: /\d{11}/g })} />}
                {(page === 'Donation' || page === 'Dashboard') && <div className='flex flex-col gap-[5px]'>
                    <input type='tel' placeholder={errors.contact1 ? 'Campo Obrigatório' : 'Contato do Responsável/Opcional'} className={errors.contact1 ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('contact1', { required: true })} />
                    <input type='tel' placeholder={errors.contact2 ? 'Campo Obrigatório' : 'Contato/Opcional ou Ramal'} className='rounded py-0.5' {...register('contact2', { required: true })} />
                </div>
                }
                {page === 'Menu' && <input type='email' placeholder={errors.email ? 'Campo Obrigatório' : 'Email'} className={errors.email ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('email', { required: true })} />}
                {title === 'Cadastrar Motorista' && <input type='number' placeholder={errors.cnh ? 'Campo Obrigatório' : 'CNH'} className={errors.cnh ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('cnh', { required: true, maxLength: 12, pattern: /\d{12}/g })} />}
                {title !== 'Entrar' && <div className='flex flex-col gap-[5px]'>
                    <input type='number' placeholder={errors.zipcode ? 'Campo Obrigatório' : 'CEP'} className={errors.zipcode ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('zipcode', { required: true, onBlur: checkedZipCode })} />
                    <input type='text' placeholder={errors.street ? 'Campo Obrigatório' : 'Logradouro: Av/Rua/Trav'} className={errors.street ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('street', { required: true })} />
                    <input type='text' placeholder={errors.district ? 'Campo Obrigatório' : 'Bairro/Distrito'} className={errors.district ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('district', { required: true })} />
                    <input type='text' placeholder={errors.city ? 'Campo Obrigatório' : 'Cidade'} className={errors.city ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('city', { required: true })} />
                    <input type='text' placeholder={errors.nunresidence ? 'Campo Obrigatório' : 'Nº Casa/Edifício'} className={errors.nunresidence ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('nunresidence', { required: true })} />
                    <div className='flex gap-5 justify-center p-1'>
                        <label htmlFor='house' className='flex items-center cursor-pointer'>
                            <input type='radio' id='house' value='house' className='mr-1.5' checked={radioSelectHbe === 'house' ? true : false} onChange={swapRadioSelectHbe} />
                            Casa
                        </label>
                        <label htmlFor='buildings' className='flex items-center cursor-pointer'>
                            <input type='radio' id='buildings' value='buildings' className='mr-1.5' checked={radioSelectHbe === 'buildings' ? true : false} onChange={swapRadioSelectHbe} />
                            Edifício
                        </label>
                        {title.includes('Doador') && <label htmlFor='enterprise' className='flex items-center cursor-pointer'>
                            <input type='radio' id='enterprise' value='enterprise' className='mr-1.5' checked={radioSelectHbe === 'enterprise' ? true : false} onChange={swapRadioSelectHbe} />
                            Empresa
                        </label>
                        }
                    </div>
                    {title.includes('Doador') && <input type='text' placeholder={errors.cnpj ? 'Campo Obrigatório' : 'CNPJ'} className={errors.cnpj ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('cnpj', { required: true })} />}
                    {radioSelectHbe === 'buildings' && <div className='flex flex-col gap-[5px]'>
                        <input type='text' placeholder={errors.building ? 'Campo Obrigatório' : 'Nome do Edifício'} className={errors.building ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('building', { required: true })} />
                        <input type='text' placeholder={errors.block ? 'Campo Obrigatório' : 'Bloco'} className={errors.block ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('block', { required: true })} />
                        <input type='text' placeholder={errors.livingapartmentroom ? 'Campo Obrigatório' : 'Apartamento/Sala'} className={errors.livingapartmentroom ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'} {...register('livingapartmentroom', { required: true })} />
                    </div>}
                    {title.includes('Doador') && <textarea placeholder={errors.referencepoint ? 'Campo Obrigatório' : 'Ponto de Referência'} className={errors.referencepoint ? 'rounded py-0.5 h-20 border-red-600 placeholder-red-600' : 'rounded py-0.5 h-20'} {...register('referencepoint', { required: true })} />}
                </div>
                }
                {(title === 'Entrar' || title === 'Cadastrar Usuário') && <div>
                    <input type={ispassword ? 'text' : 'password'} placeholder={errors.password ? 'Campo Obrigatório' : 'Senha'} className={errors.password ? 'w-full rounded py-0.5 border-red-600 placeholder-red-600' : 'w-full rounded py-0.5'} autoComplete='off' {...register('password', { required: true })} />
                    <button type='button' className='relative' onClick={handlePassword} >
                        {!ispassword && <FontAwesomeIcon icon={faEye} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                        {ispassword && <FontAwesomeIcon icon={faEyeSlash} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                    </button>
                </div>
                }
                {title === 'Cadastrar Usuário' && <div>
                    <input type={ispasswordchecked ? 'text' : 'password'} placeholder={errors.passwordcheck ? 'Campo Obrigatório' : 'Confirmar Senha'} className={errors.passwordcheck ? 'w-full rounded py-0.5 border-red-600 placeholder-red-600' : 'w-full rounded py-0.5'} autoComplete='off' {...register('passwordcheck', { required: true, validate: (value) => value === password })} />
                    <button type='button' className='relative' onClick={handlePasswordChecked} >
                        {!ispasswordchecked && <FontAwesomeIcon icon={faEye} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                        {ispasswordchecked && <FontAwesomeIcon icon={faEyeSlash} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                    </button>
                </div>
                }
            </fieldset>
            }
            {title === 'isblocked' && <div className='flex gap-5 justify-center p-1 pt-3.5'>
                <label htmlFor='isblocked' className='flex items-center cursor-pointer'>
                    <input type='radio' id='isblocked' value='true' className='mr-1.5' checked={radioSelectIsBloking === 'true' ? true : false} onChange={swapRadioSelectIsBloking} />
                    Bloquear
                </label>
                <label htmlFor='isunblocked' className='flex items-center cursor-pointer'>
                    <input type='radio' id='isunblocked' value='false' className='mr-1.5' checked={radioSelectIsBloking === 'false' ? true : false} onChange={swapRadioSelectIsBloking} />
                    Desbloquear
                </label>
            </div>
            }
            {value !== 'Donation' && <div className='flex'>
                {title === 'isblocked' && <input title={radioSelectIsBloking === 'false' ? 'Desbloquear Usuário' : 'Bloquear Usuário'} type='submit' value={radioSelectIsBloking === 'false' ? 'Desbloquear' : 'Bloquear'} className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3' />}
                <input title={title} type='submit' value={value} className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3' />
                {title === 'Cadastrar Doador' && <input title='Cadastrar e ir para Cadastrar Doação' type='submit' value='Doação' className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3' />}
                {page === 'Menu' && <button type='button' title='Voltar ao Menu' onClick={() => router.push('/menu')} className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3'>Menu</button>}
            </div>
            }
            {alertMsg && <AlertMessage {...alertMsg} title='Fechar' onClose={handleEventAlertClose} />}
        </form>
    );
};