import React, { useState } from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import {
  MainContainer,
  ListaPersonagem,
  ItemPersonagem,
} from '../../styles/pokemon.styled';
import Head from 'next/head';
import { Pagination } from '../../styles/estilo.styled';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

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
        <title>PokéAPI</title>
      </Head>
      <Header />
      <MainContainer>
        <h1>Pokémon</h1>
        <ListaPersonagem>
          {pokemon.results.map((poke) => (
            <ItemPersonagem key={poke.name}>
              <h2>
                <Link href={`pokemon/${poke.name}`}>{poke.name}</Link>
              </h2>
            </ItemPersonagem>
          ))}

          <Pagination>
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
          </Pagination>
        </ListaPersonagem>
      </MainContainer>
      <Footer />
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
