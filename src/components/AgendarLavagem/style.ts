import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 150px;
  background-color: #2b2a4c;
  gap: 1em;
  margin-bottom: 1em;
`;

const Title = styled.h2`
  color: #fff;
`;

const Button = styled.button`
  padding: 0.8em 1.5em;
  border-radius: 16px;
  border: none;
  background-color: #ffcc00;
  color: #2b2a4c;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffdd33;
  }
`;

export { Container, Title, Button };
