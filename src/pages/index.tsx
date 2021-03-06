import React, { useState } from 'react';
import globalstyles from '../styles/estilo.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ash from '../../public/images/ash.png';

export default function Home() {
  const baseURL = 'https://pokeapi.co/api/v2/';

  async function detail(pokemon: string) {
    const res = await fetch(`${baseURL}pokemon/${pokemon}`);
    return await res.json();
  }

  const [pokemon, setPokemon] = useState('');
  const [details, setDetails] = useState(null);

  const handleClick = async () => {
    try {
      if (!pokemon) {
        setDetails({ error: 'Digite um nome válido' });
        return false;
      }

      const response = await detail(pokemon);
      setDetails(response);
    } catch (err) {
      setDetails({ error: 'Pokemon não encontrado' });
    }
  };

  return (
    <div>
      <Head>
        <title>PokéAPI - Página Inicial</title>
      </Head>
      <div className={globalstyles.container}>
        <div className={globalstyles.searchbox}>
          <h1>PokéAPI</h1>
          <p>
            Utilize a barra de busca abaixo para achar o pokémon e entrar em
            seus detalhes, ou se preferir, visite a seção com{' '}
            <Link href="/pokemon">todos os pokémons</Link>.
          </p>

          <div>
            <input
              value={pokemon}
              onChange={(evt) => setPokemon(evt.target.value)}
            />
            <button onClick={handleClick}>Buscar</button>
          </div>

          {details &&
            (details.error ? (
              <h2>{details.error}</h2>
            ) : (
              <div>
                <h3>
                  Resultado:{' '}
                  <Link href={`/pokemon/${details.name}`}>{details.name}</Link>
                </h3>
              </div>
            ))}

          <Image src={ash} alt="Ash" width={200} height={350} />
        </div>
      </div>
    </div>
  );
}
