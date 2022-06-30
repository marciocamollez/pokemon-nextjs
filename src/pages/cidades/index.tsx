import React, { useState } from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import {
  MainContainer,
  ListaPersonagem,
  ItemPersonagem,
} from '../../styles/cidades.styled';
import Head from 'next/head';
import { Pagination } from '../../styles/estilo.styled';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

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
      <Header />
      <MainContainer>
        <h1>Cidades</h1>
        <ListaPersonagem>
          {cidades.results.map((city) => (
            <ItemPersonagem key={city.name}>
              <h2>
                <Link href={`cidades/${city.name}`}>{city.name}</Link>
              </h2>
            </ItemPersonagem>
          ))}

          <Pagination>
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
      listCidades: data,
    },
    revalidate: 60 * 2, // A cada 2 minutos
  };
};
