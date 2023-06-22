import DropDown from "../../img/drop.png";
import * as C from "./style.ts";

type Props = {
  handleClick?: () => void;
};

const Header = ({ handleClick }: Props) => {
  return (
    <>
      <C.Container>
        <C.ContentHeader>
          <C.P>LAVA JATO DO BIEL _</C.P>
        </C.ContentHeader>
        <div>
          <C.ContentImage src={DropDown} alt="" onClick={handleClick} />
        </div>
      </C.Container>
    </>
  );
};

export default Header;
