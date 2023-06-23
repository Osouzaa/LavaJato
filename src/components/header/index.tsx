import DropDown from "../../img/drop.png";
import * as C from "./style.ts";
import Logo from "../../img/LogoLavaJato2.png";

const Header = () => {
  return (
    <>
      <C.Container>
        <div>
          <C.P src={Logo} alt="" />
        </div>
        <div>
          <C.ContentFrase>
            Dê o cuidado que seu carro merece! 
          </C.ContentFrase>
        </div>
      </C.Container>
    </>
  );
};

export default Header;
