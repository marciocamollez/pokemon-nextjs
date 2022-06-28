import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 1100px;
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
