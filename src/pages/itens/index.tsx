import React, { useState } from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import globalstyles from '../../styles/estilo.module.scss';
import styles from '../../styles/template-paginas.module.scss';

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
      <div className={globalstyles.container}>
        <h1>Itens</h1>
        <div className={styles.listapersonagem}>
          {item.results.map((i) => (
            <div className={styles.itempersonagem} key={i.name}>
              <h2>
                <Link href={`itens/${i.name}`}>{i.name}</Link>
              </h2>
            </div>
          ))}

          <div className={globalstyles.pagination}>
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
      listItem: data,
    },
    revalidate: 60 * 2, // A cada 2 minutos
  };
};
