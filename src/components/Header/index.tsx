import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.svg';
import { Cabecalho, Menu, Logo, BoxMenu } from './Header.styled';
import { MainContainer } from '../../styles/estilo';

export function Header() {
  return (
    <Cabecalho>
      <MainContainer>
        <BoxMenu>
          <Logo>
            <Link href="/">
              <a>
                <Image src={logo} alt="Pokémon" height={50} width={150} />
              </a>
            </Link>
          </Logo>
          <Menu>
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/pokemon">
              <a>Lista de Pokémons</a>
            </Link>
          </Menu>
        </BoxMenu>
      </MainContainer>
    </Cabecalho>
  );
}
