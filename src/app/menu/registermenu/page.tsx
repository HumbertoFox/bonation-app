import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChalkboardUser, faTruck, faIdCard, faPersonShelter } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function RegistersMenuPage() {
    return (
        <main className='max-w-[1440px] h-screen flex flex-col justify-center items-center mx-auto'>
            <div className='flex flex-wrap justify-center items-center gap-[3.125rem] p-[50px] border border-[blue] rounded-[15px]'>
                <Link href={'/dashboard/underconstruction'}>
                    <FontAwesomeIcon icon={faHouse} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
                </Link>
                <Link href={'/menu/registeruser'}>
                    <FontAwesomeIcon icon={faChalkboardUser} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
                </Link>
                <Link href={'/menu/registervehicle'}>
                    <FontAwesomeIcon icon={faTruck} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
                </Link>
                <Link href={'/menu/registerdriver'}>
                    <FontAwesomeIcon icon={faIdCard} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
                </Link>
                <Link href={'/menu/registerhelper'}>
                    <FontAwesomeIcon icon={faPersonShelter} className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
                </Link>
            </div>
        </main>
    );
};