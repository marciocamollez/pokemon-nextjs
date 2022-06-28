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
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;

  a {
    color: #000;
    font-weight: 700;

    &:hover {
      color: #df5b03;
    }
  }
`;
