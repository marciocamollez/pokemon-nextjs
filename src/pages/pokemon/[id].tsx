import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/template-paginas.module.scss';
import globalstyles from '../../styles/estilo.module.scss';
import Image from 'next/image';

const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

export default function Personagem({ pokemon }) {
  const { query } = useRouter();
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <Head>
        <title>PokéAPI - Página de Pokémons</title>
      </Head>
      <div className={globalstyles.container}>
        <div className={styles.detalhepokemon}>
          <h1>
            #{pokemon.id} - {pokemon.name}
          </h1>
          {/*<p>Personagem id: {query.id}</p>*/}
          <div className={styles.pokeimg}>
            <div>
              <p>Original Form:</p>
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </div>
            <div>
              <p>Shiny:</p>
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </div>
          </div>
          <p>Base Experience - {pokemon.base_experience}</p>
          <p>
            Weight: {pokemon.weight} / Heigth: {pokemon.height}
          </p>
          <p>Types:</p>
          <ul>
            {pokemon.types.map((t) => (
              <li key={t.type.name}>{t.type.name}</li>
            ))}
          </ul>
          <p>Abilities:</p>
          <ul>
            {pokemon.abilities.map((a) => (
              <li key={a.ability.name}>{a.ability.name}</li>
            ))}
          </ul>
          <p>Moves:</p>
          <ul>
            {pokemon.moves.map((move) => (
              <li key={move.move.name}>{move.move.name}</li>
            ))}
          </ul>

          <Link href={'/pokemon'}>Voltar</Link>
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
      pokemon: data,
    },
    revalidate: 60 * 2, // A cada 2 minutos
  };
};
