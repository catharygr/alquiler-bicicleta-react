import React, { useState } from "react";
import "../style.css";

function App() {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");

  const handleComentarioChange = (event) => {
    setNuevoComentario(event.target.value);
  };

  const handleComentarioSubmit = (event) => {
    event.preventDefault();
    setComentarios((prevComentarios) => {
      const nuevosComentarios = [...prevComentarios, nuevoComentario];
      return nuevosComentarios.slice(-3);
    });
    setNuevoComentario("");
  };

  return (
    <div className="container">
      <img className="logo" src="./image/cathy.png" alt="" />
      <h2 className="titulo">Somo los campeones</h2>
      <div className="text-button">
        <div className="textarea">
          <label htmlFor="text-area"></label>
          <textarea
            id="text-area"
            placeholder="Escribe tu comentario aquí"
            value={nuevoComentario}
            onChange={handleComentarioChange}
            rows={3}
          />
        </div>
        <button onClick={handleComentarioSubmit}>Publicar</button>
      </div>
      <h2 className="endosos">-Endosos-</h2>
      <div className="endoso">
        {comentarios.map((comentario, index) => (
          <p key={index}>{comentario}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
