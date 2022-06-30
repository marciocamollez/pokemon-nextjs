import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MainContainer } from '../../styles/estilo.styled';
import { DetalhePokemon, Imagem, PokeImg } from '../../styles/itens.styled';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const baseURL = 'https://pokeapi.co/api/v2/item/';

export default function ItemDetalhe({ berries }) {
  const { query } = useRouter();
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <Header />
      <MainContainer>
        <DetalhePokemon>
          <h1>
            #{berries.id} - {berries.name}
          </h1>
          {/*<p>Personagem id: {query.id}</p>*/}
          <PokeImg>
            <div>
              <p>Image:</p>
              <Imagem src={berries.sprites.default} alt={berries.name} />
            </div>
          </PokeImg>
          <p>Cost - {berries.cost}</p>
          <p>Fling Effect? {berries.fling_effect}</p>
          <p>Fling Power? {berries.fling_power}</p>
          <p>Baby Trigger? {berries.baby_trigger_for}</p>
          <p>Attributes:</p>
          <ul>
            {berries.attributes.map((a) => (
              <li key={a.name}>{a.name}</li>
            ))}
          </ul>
          <p>Category:</p>
          <ul>{berries.category.name}</ul>
          <p>Effect Entries:</p>
          <ul>
            {berries.effect_entries.map((e) => (
              <li key={e.effect}>{e.effect}</li>
            ))}
          </ul>

          <Link href={'/itens'}>Voltar</Link>
        </DetalhePokemon>
      </MainContainer>
      <Footer />
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
      berries: data,
    },
    revalidate: 60 * 2, // A cada 2 minutos
  };
};
