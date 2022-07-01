import React, { useState } from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import globalstyles from '../../styles/estilo.module.scss';
import styles from '../../styles/template-paginas.module.scss';

const baseURL = 'https://pokeapi.co/api/v2/location/';

export default function Cidades({ listCidades }) {
  const [cidades, setCidades] = useState(listCidades);
  const [offset, setOffset] = useState(0);

  const fetchCidades = async (baseURL, next) => {
    const response = await fetch(baseURL);
    const nextCity = await response.json();

    setOffset(next ? offset + 20 : offset - 20);
    setCidades(nextCity);
  };

  return (
    <div>
      <Head>
        <title>PokéAPI - Cidades</title>
      </Head>
      <div className={globalstyles.container}>
        <h1>Cidades</h1>
        <div className={styles.listapersonagem}>
          {cidades.results.map((city) => (
            <div className={styles.itempersonagem} key={city.name}>
              <h2>
                <Link href={`cidades/${city.name}`}>{city.name}</Link>
              </h2>
            </div>
          ))}

          <div className={globalstyles.pagination}>
            <button
              disabled={!cidades.previous}
              onClick={() => fetchCidades(cidades.previous, false)}
            >
              Anterior
            </button>
            <button
              disabled={!cidades.next}
              onClick={() => fetchCidades(cidades.next, true)}
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
      listCidades: data,
    },
    revalidate: 60 * 2, // A cada 2 minutos
  };
};
