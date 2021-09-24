import { Row, Col } from "antd";
import React from "react";
import img1 from "../../img//img1.jpeg";
import img2 from "../../img//img2.jpeg";

export default function Seccion_1() {
  return (
    <div className="seccion_1_conteiner">
    <Row >
      <Col xs= {24} sm= {12} md= {8} lg= {8} >
        <div className="seccion_1_text">
          <h1>¿NECESITAS AYUDA TECNICA?</h1>
          <p>
            Soluciona y evita los Problemas con las asesorias que en Forge
            tenemos para ti. Por que en Forge nos importas y nos importa tengas
            las mejores herramientas{" "}
          </p>
        </div>
      </Col>
      <Col xs= {24} sm= {12} md= {8} lg= {8} >
        <div className="imagenes">
          <img className="imagen1" src={img1} />
          <img className="imagen2" src={img2} />
        </div>
      </Col>
      {/* <Col span={6}>
        <div className="imagenes">
        </div>
      </Col> */}
    </Row>
    </div>
  );
}
