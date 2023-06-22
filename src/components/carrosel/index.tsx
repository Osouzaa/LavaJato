import * as C from "./style";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Car1 from "../../img/Car1.jpg";
import Car2 from "../../img/car2.jpg";
import Car3 from "../../img/car3.jpg";
function Carrossel() {
  return (
    <C.Container>
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        showStatus={false}

      >
        <div>
          <img src={Car1} alt="Imagem 1" />
        </div>
        <div>
          <img src={Car2} alt="Imagem 2" />
        </div>
        <div>
          <img src={Car3} alt="Imagem 3" />
        </div>
      </Carousel>
    </C.Container>
  );
}

export default Carrossel;
