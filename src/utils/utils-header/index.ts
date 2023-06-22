import Home from "../../img/Home.png";
import Lavagem from "../../img/Lavagem.png";
import Products from "../../img/Products.png";

interface IHeader {
  text: string;
  img: string;
}

const ListHeader: IHeader[] = [
  {
    text: "Produtos",
    img: Products,
  },
  {
    text: "Pagina Inicial",
    img: Home,
  },
  {
    text: "Marcar Horario",
    img: Lavagem,
  },
];

export default ListHeader;
