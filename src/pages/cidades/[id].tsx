import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import globalstyles from '../../styles/estilo.module.scss';
import styles from '../../styles/template-paginas.module.scss';

const baseURL = 'https://pokeapi.co/api/v2/location/';

export default function DetalheCidade({ cities }) {
  const { query } = useRouter();
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <Head>
        <title>PokéAPI - Página de Cidades</title>
      </Head>
      <div className={globalstyles.container}>
        <div className={styles.detalhepokemon}>
          <h1>
            #{cities.id} - {cities.name}
          </h1>
          {/*<p>Personagem id: {query.id}</p>*/}
          <div className={styles.pokeimg}>
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
          </div>

          <Link href={'/cidades'}>Voltar</Link>
        </div>
      </div>
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
