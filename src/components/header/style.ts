import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  background-color: #2b2a4c;
  border-bottom: 4px solid #000;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

const P = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-left: 0.5em;
  color: #fff;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

const ContentImage = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
  margin-right: 0.5em;
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export { Container, ContentImage, P, ContentHeader };
