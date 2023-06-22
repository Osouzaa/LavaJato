import MarcarLavagem from "./components/AgendarLavagem";
import BarraLateral from "./components/barraLateral";
import Carrossel from "./components/carrosel";
import Footer from "./components/footer";
import MapaLocalizacao from "./components/localização";
import Slogan from "./components/slogan";

function App() {
  return (
    <>
      
      <BarraLateral />
      <Carrossel />
      <Slogan />
      <MarcarLavagem />
      <MapaLocalizacao />
      <Footer />
    </>
  );
}

export default App;
