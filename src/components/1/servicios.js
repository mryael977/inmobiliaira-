import React from "react";
import Background from "../../images/renta.jpeg";
import Background1 from "../../images/2.jpeg";
import { Link } from "react-router-dom";

const Serv = () => {
  return (
    <div className="servicios1">
      <p className="titulo"> Servicios inmobiliarios</p>

      <div className="card2">
        <img className="serv1" src={Background} />

        <h3 className="servInfo">Compra o renta de inmuebles</h3>
        <br />

        <p className="servInfoP">
          Somos especialistas en el mercado y contamos con herramientas
          exclusivas que te permitirán encontrar en nuestro sistema, propiedades
          en un valor real de mercado.
        </p>
      </div>

      <div className="card2 dos">
        <img className="serv1" src={Background1} />

        <h3 className="servInfo">Vender o arrendar un inmueble</h3>
        <br />
        <p className="servInfoP">
          {" "}
          Con nosotros encontrarás el compromiso de un servicio personalizado,
          ágil y transparente, que gracias a nuestras herramientas te permitirá
          encontrar al comprador ideal en el menor tiempo posible.
        </p>
      </div>
    </div>
  );
};

export default Serv;
