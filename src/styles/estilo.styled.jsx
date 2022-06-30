import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 1100px;
  padding: 0 15px;
  margin: auto;

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

export const Pagination = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  justify-content: space-between;

  button {
    background-color: #fc0;
    color: #000;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      background-color: #0a3b7a;
      color: #fff;
    }

    &:disabled {
      background-color: #bbb;
      cursor: not-allowed;
      color: #000;
      opacity: 0.8;
    }
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
  min-height: 700px;

  div {
    display: flex;
    flex-direction: row;
    padding: 0 15px;
    margin-bottom: 30px;

    @media (max-width: 450px) {
      flex-direction: column;
    }
  }

  h1 {
    color: #0a3b7a;
    font-size: 2rem;
    text-align: center;
  }

  p {
    font-size: 1rem;
    margin-bottom: 50px;
    text-align: center;
  }

  a {
    color: #0a3b7a;

    &:hover {
      color: #df5b03;
    }
  }

  input {
    background-color: #fc0;
    color: #000;
    padding: 10px;
    border-radius: 10px 0 0 10px;
    max-width: 500px;
    border: 0px;

    @media (max-width: 450px) {
      border-radius: 10px 10px 10px 10px;
      margin-bottom: 10px;
    }
  }

  button {
    background-color: #0a3b7a;
    color: #fff;
    border: 0px;
    border-radius: 0 10px 10px 0;
    padding: 10px;

    @media (max-width: 450px) {
      border-radius: 10px 10px 10px 10px;
      margin-bottom: 10px;
    }

    &:hover {
      background-color: #df5b03;
      cursor: pointer;
    }
  }
`;
