'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/components/style/menu.module.css';
import EnterpriseImg from '@/assets/LOGOBFN-INTER.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faUserPlus, faSquarePen, faUserPen, faCalendarPlus, faCalendarCheck, faCalendarDays, faFileCircleCheck, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
    const [navMenuLink, setNavMenuLink] = useState('');
    const navigate = useRouter();
    const handlesMenuLinkClick = (element: string) => {
        setNavMenuLink(element);
        localStorage.setItem('activeMenuLinkSelection', element);
    };

    useEffect(() => {
        const activeMenuLinkSelection = localStorage.getItem('activeMenuLinkSelection');
        if (activeMenuLinkSelection != null) {
            setNavMenuLink(activeMenuLinkSelection);
            if (activeMenuLinkSelection == 'RegisterDonation') {
                navigate.push('/registerdonation');
            } else if (activeMenuLinkSelection == 'RegisterDonor') {
                navigate.push('/registerdonor');
            } else if (activeMenuLinkSelection == 'Editar Doação') {
                navigate.push('/EditaDoacao');
            } else if (activeMenuLinkSelection == 'Editar Doador') {
                navigate.push('/EditaDoador');
            } else if (activeMenuLinkSelection == 'Agendar Coleta') {
                navigate.push('/AgendarColeta');
            } else if (activeMenuLinkSelection == 'Confirmar Coleta') {
                navigate.push('/ConfirmColeta');
            } else if (activeMenuLinkSelection == 'Relatório') {
                navigate.push('/Relatorio');
            };
        } else {
            setNavMenuLink('RegisterDonation');
            navigate.push('/registerdonation');
        };
    }, [navigate]);
    return (
        <div className={styles.section}>
            <Link className={styles.linkimg} href={'/login'}>
                <Image src={EnterpriseImg} alt='Logo Empresa' priority />
            </Link>
            <nav>
                <div>
                    <Link title='Cadastrar Doação' href={'/registerdonation'} className={navMenuLink == 'RegisterDonation' ? styles.active : ''} onClick={() => handlesMenuLinkClick('RegisterDonation')}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <span>Cadastrar Doação</span>
                    </Link>
                </div>
                <div>
                    <Link title='Cadastrar Doador' href={'/registerdonor'} className={navMenuLink == 'RegisterDonor' ? styles.active : ''} onClick={() => handlesMenuLinkClick('RegisterDonor')}>
                        <FontAwesomeIcon className={styles.rotatesvg} icon={faUserPlus} />
                        <span>Cadastrar Doador</span>
                    </Link>
                </div>
                <div>
                    <Link title='Editar Doação' href={'/EditaDoacao'} className={navMenuLink == 'Editar Doação' ? styles.active : ''} onClick={() => handlesMenuLinkClick('Editar Doação')}>
                        <FontAwesomeIcon icon={faSquarePen} />
                        <span>Editar Doação</span>
                    </Link>
                </div>
                <div>
                    <Link title='Editar Doador' href={'/EditaDoador'} className={navMenuLink == 'Editar Doador' ? styles.active : ''} onClick={() => handlesMenuLinkClick('Editar Doador')}>
                        <FontAwesomeIcon className={styles.rotatesvg} icon={faUserPen} />
                        <span>Editar Doador</span>
                    </Link>
                </div>
                <div>
                    <Link title='Agendar Coleta' href={'/AgendarColeta'} className={navMenuLink == 'Confirmar Coleta' ? styles.active : ''} onClick={() => handlesMenuLinkClick('Agendar Coleta')}>
                        <FontAwesomeIcon icon={faCalendarPlus} />
                        <span>Agendar Coleta</span>
                    </Link>
                </div>
                <div>
                    <Link title='Confirmar Coleta' href={'/ConfirmColeta'} className={navMenuLink == 'Confirmar Coleta' ? styles.active : ''} onClick={() => handlesMenuLinkClick('Confirmar Coleta')}>
                        <FontAwesomeIcon icon={faCalendarCheck} />
                        <span>Confirmar Coleta</span>
                    </Link>
                </div>
                <div>
                    <Link title='Relatório' href={'/Relatorio'} className={navMenuLink == 'Relatório' ? styles.active : ''} onClick={() => handlesMenuLinkClick('Relatório')}>
                        <FontAwesomeIcon className={styles.rotatesvg} icon={faFileCircleCheck} />
                        <span>Relatório</span>
                    </Link>
                </div>
                <div>
                    <Link title='Agenda' href={'/Agenda'} className={navMenuLink == 'Agenda' ? styles.active : ''} onClick={() => handlesMenuLinkClick('Agenda')}>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span>Agenda</span>
                    </Link>
                </div>
                <div>
                    <Link href={'/login'}>
                        <FontAwesomeIcon className={styles.rotatesvg} icon={faRightToBracket} />
                        <span>Sair do Sistema</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};