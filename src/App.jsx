import React, { useState, useEffect } from "react";
import "../style.css";

function App() {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [de, setDe] = useState("");
  const [a, setA] = useState("");
  const [like, setLike] = useState(false);

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
      <form className="text-button">
        <textarea
          className="textarea"
          placeholder="Escribe tu comentario aquí"
          value={nuevoComentario}
          onChange={handleComentarioChange}
          rows={3}
        />

        <div className="de-a">
          <input id="de" type="text" placeholder="De" />
          <input id="a" type="text" placeholder="A" />
        </div>
        <button onClick={handleComentarioSubmit}>Publicar</button>
      </form>
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
