import styled from 'styled-components';

export const Imagem = styled.img`
  max-width: 100%;
  display: block;
`;
export const DetalhePokemon = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;

  h1 {
    color: #0a3b7a;
    font-size: 2rem;
  }

  p {
    font-weight: 700;
  }

  ul {
    margin: 0;
    li {
      list-style: none;
    }
  }

  a {
    background-color: #fc0;
    color: #000;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 5px 10px;
    display: inline-block;
    margin-top: 20px;
    width: 100px;
    text-align: center;

    &:hover {
      background-color: #0a3b7a;
      color: #fff;
    }
  }
`;

export const PokeImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #fc0;
  border-bottom: 5px solid #0a3b7a;

  p {
    text-align: center;
  }
`;

export const MainContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 15px;

  h2 {
    font-size: 1.5rem;
    margin-top: 10px;
    margin-bottom: 10px;

    a {
      color: #0a3b7a;

      &:hover {
        color: #df5b03;
      }
    }
  }
`;

export const ListaPersonagem = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;
export const ItemPersonagem = styled.li`
  list-style: none;
  padding: 0;
  flex-basis: 20%;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;

  @media (max-width: 500px) {
    flex-basis: 100%;
  }
`;
