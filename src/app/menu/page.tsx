'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserCheck, faUserPen, faUserLock, faTruck, faIdCard, faAddressCard, faClipboardUser, faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
export default function RegistersMenuPage() {
    return (
        <>
            <Link title='Home' href={'/dashboard/underconstruction'}>
                <FontAwesomeIcon icon={faHouse} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
            </Link>
            <Link title='Cadastrar Usuário' href={'/menu/registeruser'}>
                <FontAwesomeIcon icon={faUserCheck} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
            </Link>
            <Link title='Editar Usuário' href={'/menu/edituser'}>
                <FontAwesomeIcon icon={faUserPen} className='text-[95px] text-[green] duration-[400ms] hover:text-[orange]' />
            </Link>
            <Link title='Bloquear Usuário' href={'/menu/blockinguser'}>
                <FontAwesomeIcon icon={faUserLock} className='text-[95px] text-[green] duration-[400ms] hover:text-[red]' />
            </Link>
            <Link title='Cadastrar Veículo' href={'/menu/registervehicle'}>
                <FontAwesomeIcon icon={faTruck} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
            </Link>
            <Link title='Cadastrar Motorista' href={'/menu/registerdriver'}>
                <FontAwesomeIcon icon={faAddressCard} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
            </Link>
            <Link title='Editar Motorista' href={'/menu/editdriver'}>
                <FontAwesomeIcon icon={faIdCard} className='text-[95px] text-[green] duration-[400ms] hover:text-[orange]' />
            </Link>
            <Link title='Cadastrar Ajudante' href={'/menu/registerhelper'}>
                <FontAwesomeIcon icon={faClipboardUser} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
            </Link>
            <Link title='Editar Ajudante' href={'/menu/edithelper'}>
                <FontAwesomeIcon icon={faChalkboardUser} className='text-[95px] text-[green] duration-[400ms] hover:text-[orange]' />
            </Link>
        </>
    );
};