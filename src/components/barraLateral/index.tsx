import * as C from "./style.ts";

import ListHeader from "../../utils/utils-header/index.ts";

const BarraLateral = () => {
  return (
    <>
      <C.Container>
        {ListHeader.map((item, index) => (
          <C.ContainerList>
            <C.Image src={item.img} alt="" />
            <C.ContentList key={index}>
              <li>{item.text}</li>
            </C.ContentList>
          </C.ContainerList>
        ))}
      </C.Container>
    </>
  );
};

export default BarraLateral;
