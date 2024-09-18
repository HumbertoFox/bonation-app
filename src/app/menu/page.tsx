'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChalkboardUser, faTruck, faIdCard, faPersonShelter } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
export default function RegistersMenuPage() {
    return (
        <>
            <Link title='Home' href={'/dashboard/underconstruction'}>
                <FontAwesomeIcon icon={faHouse} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
            </Link>
            <Link title='Cadastrar Usuário' href={'/menu/registeruser'}>
                <FontAwesomeIcon icon={faChalkboardUser} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
            </Link>
            <Link title='Cadastrar Veículo' href={'/menu/registervehicle'}>
                <FontAwesomeIcon icon={faTruck} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
            </Link>
            <Link title='Cadastrar Motorista' href={'/menu/registerdriver'}>
                <FontAwesomeIcon icon={faIdCard} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
            </Link>
            <Link title='Cadastrar Ajudante' href={'/menu/registerhelper'}>
                <FontAwesomeIcon icon={faPersonShelter} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
            </Link>
        </>
    );
};