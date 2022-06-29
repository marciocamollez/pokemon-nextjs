import styled from 'styled-components';

export const Cabecalho = styled.div`
  display: flex;
  background: #fc0;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 5px solid #0a3b7a;
`;

export const BoxMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;

  a {
    color: #000;
    font-weight: 700;
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;

    &:hover {
      color: #df5b03;
    }
  }

  @media (max-width: 350px) {
    flex-direction: column;
  }
`;
