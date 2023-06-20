import DropDown from "../../img/drop.png";
import * as C from "./style.ts"

const Header = () => {
  return (
    <C.Container>
      <div>
        <C.P>LVJ_BIEL</C.P>
      </div>
      <div>
        <C.ContentImage src={DropDown} alt="" />
      </div>
    </C.Container>
  );
};

export default Header;
