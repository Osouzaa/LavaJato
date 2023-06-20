import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff; /* Estilização adicional perfeita */
  padding: 1em 0;

  p {
    text-align: center;
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }
`;

const Title = styled.h3`
  text-align: center;
  color: #333;
  font-size: 22px;
  margin-bottom: 10px;
`;

const pLJ = styled.div  `
  padding: 1em 0;
  color: #333;
  font-size: 20px;
  font-weight: 600;
`;
export { Container, Title, pLJ };
