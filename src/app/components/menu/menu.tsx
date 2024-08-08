import Image from 'next/image';
import Link from 'next/link';
import styles from './menu.module.css';
import EnterpriseImg from '@/assets/LOGOBFN-INTER.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faUserPlus, faSquarePen, faUserPen, faCalendarPlus, faCalendarCheck, faCalendarDays, faFileCircleCheck, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
    return (
        <div className={styles.section}>
            <Link className={styles.linkimg} href={'/login'}>
                <Image src={EnterpriseImg} alt='Logo Empresa' priority />
            </Link>
            <nav>
                <div>
                    <Link href={'/'}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <span>Cadastrar Doação</span>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}>
                        <FontAwesomeIcon className={styles.rotatesvg} icon={faUserPlus} />
                        <span>Cadastrar Doador</span>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}>
                        <FontAwesomeIcon icon={faSquarePen} />
                        <span>Editar Doação</span>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}>
                        <FontAwesomeIcon className={styles.rotatesvg} icon={faUserPen} />
                        <span>Editar Doador</span>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}>
                        <FontAwesomeIcon icon={faCalendarPlus} />
                        <span>Agendar Coleta</span>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}>
                        <FontAwesomeIcon icon={faCalendarCheck} />
                        <span>Confirmar Coleta</span>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}>
                        <FontAwesomeIcon className={styles.rotatesvg} icon={faFileCircleCheck} />
                        <span>Relatório</span>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span>Agenda</span>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}>
                        <FontAwesomeIcon className={styles.rotatesvg} icon={faRightToBracket} />
                        <span>Sair do Sistema</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};