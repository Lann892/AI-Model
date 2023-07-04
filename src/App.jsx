import React, { useState, useEffect } from "react";
import "./style.scss";
import * as tf from "@tensorflow/tfjs";

function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [modelo, setModelo] = useState(null);

  useEffect(() => {
    async function cargarModelo() {
      const model = await tf.loadLayersModel("/model.json");
      setModelo(model);
    }
    cargarModelo();
  }, []);

  function cambiarCelsius(evento) {
    const valor = parseInt(evento.target.value);
    setCelsius(valor);
    if (modelo != null) {
      const tensor = tf.tensor1d([valor]);
      const prediccion = modelo.predict(tensor).dataSync()[0];
      const fahrenheit = Math.round(prediccion);
      setFahrenheit(fahrenheit);
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Conversor de grados celsius</h1>
        <input
          type="range"
          max="200"
          min="-200"
          onInput={cambiarCelsius}
          value={celsius}
          id="celsius"
        />
        <h2>
          {celsius}°Celsius son {fahrenheit}°Fahrenheit
        </h2>
      </div>
    </div>
  );
}

export default App;