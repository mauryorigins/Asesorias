import { Row, Col } from "antd";
import React from "react";
import img3 from "../../img/img3.jpeg";

export default function Seccion_2() {
  return (
    <div className="seccion_2_conteiner">
      <Row justify={"space-between"}>
        <Col xs= {24} sm= {24} md= {12} lg= {8}>
          <div className="seccion_2_img">
            <img src={img3} />
          </div>
        </Col>{" "}
        <Col xs= {24} sm= {24} md= {12} lg= {8}>
          <div className="seccion_2_text">
            <p>
              Si tienes alguna duda o problema con el desarrollo de tu pagina o
              simplemente quisieras saber más del tema. No dudes en contactarnos
              y tomar las asesorias personalizadas que tenemos para ti.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
