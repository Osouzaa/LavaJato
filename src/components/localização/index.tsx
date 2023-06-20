import * as C from "./style.ts";
const MapaLocalizacao = () => {
  return (
    <div>
      <C.Title>Localização:</C.Title>
      <div style={{ width: "100%", height: "400px", border: "1px solid #ccc" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.789354869958!2d-44.19774162389997!3d-19.93327953841237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c2460d9023d1%3A0x628002eb2f905011!2sAv.%20Augusto%20Buzatti%20Filho%2C%2094%20-%20Bom%20Retiro%2C%20Betim%20-%20MG%2C%2032606-514!5e0!3m2!1spt-BR!2sbr!4v1687274334354!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          title="Mapa de Localização"
        ></iframe>
      </div>
    </div>
  );
};

export default MapaLocalizacao;
