import React, { useState } from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import {
  MainContainer,
  ListaPersonagem,
  ItemPersonagem,
} from '../../styles/itens.styled';
import Head from 'next/head';
import { Pagination } from '../../styles/estilo.styled';

const baseURL = 'https://pokeapi.co/api/v2/item';

export default function Itens({ listItem }) {
  const [item, setItem] = useState(listItem);
  const [offset, setOffset] = useState(0);

  const fetchPokemon = async (baseURL, next) => {
    const response = await fetch(baseURL);
    const nextPokemon = await response.json();

    setOffset(next ? offset + 20 : offset - 20);
    setItem(nextPokemon);
  };

  return (
    <div>
      <Head>
        <title>PokéAPI - Itens</title>
      </Head>
      <MainContainer>
        <h1>Itens</h1>
        <ListaPersonagem>
          {item.results.map((i) => (
            <ItemPersonagem key={i.name}>
              <h2>
                <Link href={`itens/${i.name}`}>{i.name}</Link>
              </h2>
            </ItemPersonagem>
          ))}

          <Pagination>
            <button
              disabled={!item.previous}
              onClick={() => fetchPokemon(item.previous, false)}
            >
              Anterior
            </button>
            <button
              disabled={!item.next}
              onClick={() => fetchPokemon(item.next, true)}
            >
              Próximo
            </button>
          </Pagination>
        </ListaPersonagem>
      </MainContainer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();

  return {
    props: {
      listItem: data,
    },
    revalidate: 60 * 2, // A cada 2 minutos
  };
};
