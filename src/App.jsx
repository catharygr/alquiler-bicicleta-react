import React, { useState, useEffect } from "react";
import "../style.css";

function App() {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [de, setDe] = useState("");
  const [a, setA] = useState("");

  const mapeo = comentarios.map((comentario, index) => (
    <p key={index}>{comentario}</p>
  ));

  useEffect(() => {
    const comentariosGuardados = localStorage.getItem("comentarios");
    if (comentariosGuardados) {
      setComentarios(JSON.parse(comentariosGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
  }, [comentarios]);

  const handleComentarioChange = (event) => {
    setNuevoComentario(event.target.value);
  };

  const handleComentarioSubmit = (event) => {
    event.preventDefault();

    const comentario = `De: ${de} A: ${a}\n ${nuevoComentario}`;

    setComentarios((prevComentarios) => {
      const nuevosComentarios = [...prevComentarios, comentario];
      return nuevosComentarios.slice(-3);
    });

    setNuevoComentario("");
    setDe("");
    setA("");
  };

  return (
    <div className="container">
      <img
        className="logo"
        src="./image/cathy.png"
        alt="Imagen de una persona"
      />
      <h2 className="titulo">Somo los campeones</h2>
      <form className="text-button">
        <textarea
          className="textarea"
          placeholder="Escribe tu comentario aquí"
          value={nuevoComentario}
          onChange={handleComentarioChange}
          rows={3}
        />

        <div className="de-a">
          <input
            id="de"
            type="text"
            placeholder="De"
            value={de}
            onChange={(event) => setDe(event.target.value)}
          />
          <br />
          <input
            id="a"
            type="text"
            placeholder="A"
            value={a}
            onChange={(event) => setA(event.target.value)}
          />
        </div>
        <button onClick={handleComentarioSubmit}>Publicar</button>
      </form>
      <h2 className="endosos">-Endosos-</h2>
      <div className="endoso">{mapeo}</div>
    </div>
  );
}

export default App;
