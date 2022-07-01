import Image from 'next/image';
import Link from 'next/link';
import rodape from '../../../public/images/footer.png';
import styles from './styles.module.scss';
import globalstyles from '../../styles/estilo.module.scss';

export function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={globalstyles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image src={rodape} alt="Pokémon" height={50} width={50} />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
