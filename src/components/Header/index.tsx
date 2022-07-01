import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.png';
import styles from './styles.module.scss';
import globalstyles from '../../styles/estilo.module.scss';

export function Header() {
  return (
    <div className={styles.cabecalho}>
      <div className={globalstyles.container}>
        <div className={styles.boxmenu}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image src={logo} alt="Pokémon" height={50} width={150} />
              </a>
            </Link>
          </div>
          <nav className={styles.menu}>
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/pokemon">
              <a>Lista de Pokémons</a>
            </Link>

            <Link href="/cidades">
              <a>Lista de Cidades</a>
            </Link>

            <Link href="/itens">
              <a>Lista de Itens</a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
