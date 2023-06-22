import styled from "styled-components";

const Container = styled.div`
  width: 0px;
  height: 700px;
  background-color: #2b2a4c;
  position: absolute;
  z-index: 1;
  right: 0;
  border: none;
  transition: width 0.3s ease-in-out;

  &.expanded {
    width: 220px;
    transition: width 1s ease;
  }
`;
const ContainerList = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin: 1em 0.5em;
`;
const ContentList = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    color: #fff;
    font-size: 16px;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

export { Container, ContentList, ContainerList, Image };
