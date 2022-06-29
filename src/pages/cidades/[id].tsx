import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MainContainer } from '../../styles/estilo';
import { DetalhePokemon, Imagem, PokeImg } from './cidades.styled';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const baseURL = 'https://pokeapi.co/api/v2/location/';

export default function DetalheCidade({ cities }) {
  const { query } = useRouter();
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <Header />
      <MainContainer>
        <DetalhePokemon>
          <h1>
            #{cities.id} - {cities.name}
          </h1>
          {/*<p>Personagem id: {query.id}</p>*/}
          <PokeImg>
            <div>
              <p>Região:</p>
              <h3>{cities.region.name}</h3>
            </div>
            <div>
              <p>Geração:</p>

              {cities.game_indices.map((c) => (
                <span key={c.generation.name}>
                  <h3>{c.generation.name}</h3>
                </span>
              ))}
            </div>
          </PokeImg>

          <Link href={'/cidades'}>Voltar</Link>
        </DetalhePokemon>
      </MainContainer>
      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();

  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;

  const response = await fetch(`${baseURL}${id}`);
  const data = await response.json();

  return {
    props: {
      cities: data,
    },
    revalidate: 60 * 2, // A cada 2 minutos
  };
};
