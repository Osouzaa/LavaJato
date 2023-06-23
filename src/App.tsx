import MarcarLavagem from "./components/AgendarLavagem";
import Carrossel from "./components/carrosel";
import Footer from "./components/footer";
import Header from "./components/header";
import MapaLocalizacao from "./components/localização";
import Slogan from "./components/slogan";

function App() {
  return (
    <>
      
      <Header />
      <Carrossel />
      <Slogan />
      <MarcarLavagem />
      <MapaLocalizacao />
      <Footer />
    </>
  );
}

export default App;
