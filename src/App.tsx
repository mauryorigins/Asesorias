import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Seccion_1 from "./Components/Seccion_1/Seccion_1";
import Seccion_2 from "./Components/Seccion_2/Seccion_2";
import Seccion_3 from "./Components/Seccion_3/Seccion_3";

export default function App() {
  return (
    <div>
      <Seccion_1 />
      <Seccion_2 />
      <Seccion_3 />
    </div>
  );
}
