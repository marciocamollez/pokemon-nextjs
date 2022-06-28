import React from 'react';
import { MainContainer } from '../styles/estilo';
import Head from 'next/head';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>PokéAPI - Página Inicial</title>
      </Head>
      <Header />
      <MainContainer>
        <h1>Página Inicial</h1>
      </MainContainer>
    </div>
  );
}
