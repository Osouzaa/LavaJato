import { useState } from "react";
import * as C from "./style.ts";
import Header from "../header/index.tsx";
import ListHeader from "../../utils/utils-header/index.ts";

const BarraLateral = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const Container = isExpanded ? "expanded" : "";

  return (
    <>
      <C.Container className={Container}>
        {ListHeader.map((item, index) => (
          <C.ContainerList>
            <C.Image src={item.img} alt="" />
            <C.ContentList key={index}>
              <li>{item.text}</li>
            </C.ContentList>
          </C.ContainerList>
        ))}
        <Header handleClick={handleClick} />
      </C.Container>
    </>
  );
};

export default BarraLateral;
