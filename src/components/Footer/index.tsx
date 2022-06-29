import Image from 'next/image';
import Link from 'next/link';
import rodape from '../../../public/footer.svg';
import { Rodape, Logo } from './Footer.styled';
import { MainContainer } from '../../styles/estilo';

export function Footer() {
  return (
    <Rodape>
      <MainContainer>
        <Logo>
          <Link href="/">
            <a>
              <Image src={rodape} alt="Pokémon" height={50} width={50} />
            </a>
          </Link>
        </Logo>
      </MainContainer>
    </Rodape>
  );
}
