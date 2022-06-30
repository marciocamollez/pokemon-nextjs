import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.svg';
import { Cabecalho, Menu, Logo, BoxMenu } from './Header.styled';
import { MainContainer } from '../../styles/estilo.styled';

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

            <Link href="/cidades">
              <a>Lista de Cidades</a>
            </Link>

            <Link href="/itens">
              <a>Lista de Itens</a>
            </Link>
          </Menu>
        </BoxMenu>
      </MainContainer>
    </Cabecalho>
  );
}
