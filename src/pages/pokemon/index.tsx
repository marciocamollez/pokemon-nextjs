import React, { useState } from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import styles from '../../styles/template-paginas.module.scss';
import globalstyles from '../../styles/estilo.module.scss';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

export default function PokeIndex({ listPokemon }) {
  const [pokemon, setPokemon] = useState(listPokemon);
  const [offset, setOffset] = useState(0);

  const fetchPokemon = async (baseURL, next) => {
    const response = await fetch(baseURL);
    const nextPokemon = await response.json();

    setOffset(next ? offset + 20 : offset - 20);
    setPokemon(nextPokemon);
  };

  return (
    <div>
      <Head>
        <title>PokéAPI - Página de Pokémons</title>
      </Head>
      <div className={globalstyles.container}>
        <h1>Pokémon</h1>
        <div className={styles.listapersonagem}>
          {pokemon.results.map((poke) => (
            <div className={styles.itempersonagem} key={poke.name}>
              <h2>
                <Link href={`pokemon/${poke.name}`}>{poke.name}</Link>
              </h2>
            </div>
          ))}

          <div className={globalstyles.pagination}>
            <button
              disabled={!pokemon.previous}
              onClick={() => fetchPokemon(pokemon.previous, false)}
            >
              Anterior
            </button>
            <button
              disabled={!pokemon.next}
              onClick={() => fetchPokemon(pokemon.next, true)}
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();

  return {
    props: {
      listPokemon: data,
    },
    revalidate: 60 * 2, // A cada 2 minutos
  };
};
