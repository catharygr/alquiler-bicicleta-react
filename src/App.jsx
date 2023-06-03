import React, { useState } from "react";
import "../style.css";

function App() {
  const [comentarios, setComentarios] = useState(
    localStorage.getItem(JSON.parse("comentarios")) || []
  );
  console.log(comentarios);
  console.log(comentarios);
  const [nuevoComentario, setNuevoComentario] = useState({
    de: "",
    a: "",
    comentario: "",
  });

  const mapeo = comentarios.map((comment, index) => (
    <div key={index}>
      <p>{comment.de}</p>
      <p>{comment.comentario}</p>
      <p>{comment.a}</p>
    </div>
  ));

  function handleForm(e) {
    const { value, name } = e.target;
    setNuevoComentario((oldState) => ({
      ...oldState,
      [name]: value,
    }));
    setNuevoComentario("");
  }

  function handleClick() {
    const newState = [...comentarios, nuevoComentario];
    setComentarios(newState);
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
  }

  setComentarios((prevComentarios) => {
    const nuevosComentarios = [...prevComentarios, comentarios];
    return nuevosComentarios.slice(-3);
  });

  return (
    <div className="container">
      <img
        className="logo"
        src="./image/cathy.png"
        alt="Imagen de una persona"
      />
      <h2 className="titulo">Somo los campeones</h2>
      <div className="text-button">
        <textarea
          className="textarea"
          placeholder="Escribe tu comentario aquí"
          value={nuevoComentario.comentario}
          name="comentario"
          onChange={handleForm}
          rows={3}
        />
        <div className="de-a">
          <input
            id="de"
            type="text"
            placeholder="De"
            name="de"
            value={nuevoComentario.de}
            onChange={handleForm}
          />
          <input
            id="a"
            type="text"
            placeholder="A"
            value={nuevoComentario.a}
            name="a"
            onChange={handleForm}
          />
        </div>
        <button onClick={handleClick}>Publicar</button>
      </div>
      <h2 className="endosos">-Endosos-</h2>
      <div className="endoso">{mapeo}</div>
    </div>
  );
}

export default App;
