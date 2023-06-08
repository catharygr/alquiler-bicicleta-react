/* eslint-disable no-dupe-else-if */
import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import "../style.css";

function App() {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState({
    de: "",
    comentario: "",
    a: "",
  });
  const [contador, setContador] = useState(0);
  const [meGusta, setMeGusta] = useState(false);

  const manejarMeGusta = () => {
    if (meGusta) {
      setContador(contador - 1);
    } else {
      setContador(contador + 1);
    }
    setMeGusta(!meGusta);
  };

  const handleComentario = (e) => {
    const { name, value } = e.target;
    setNuevoComentario((oldComentario) => ({
      ...oldComentario,
      [name]: value,
    }));
  };

  function handleClick() {
    const comentario = { ...nuevoComentario };

    setComentarios((oldComentarios) => {
      const nuevosComentarios = [comentario, ...oldComentarios].slice(0, 3);
      return nuevosComentarios;
    });

    setNuevoComentario({ de: "", comentario: "", a: "" });

    // localStorage
    const comentariosGuardados = localStorage.getItem("comentarios");
    const comentariosParseados = comentariosGuardados
      ? JSON.parse(comentariosGuardados)
      : [];
    const nuevosComentariosLocalStorage = [
      comentario,
      ...comentariosParseados,
    ].slice(0, 3);
    localStorage.setItem(
      "comentarios",
      JSON.stringify(nuevosComentariosLocalStorage)
    );
  }

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
          name="comentario"
          value={nuevoComentario.comentario}
          onChange={handleComentario}
          rows={3}
        />

        <div className="de-a">
          <input
            id="de"
            type="text"
            placeholder="De"
            name="de"
            value={nuevoComentario.de}
            onChange={handleComentario}
          />

          <input
            id="a"
            type="text"
            placeholder="A"
            name="a"
            value={nuevoComentario.a}
            onChange={handleComentario}
          />
        </div>
        <button className="btn" onClick={handleClick}>
          Publicar
        </button>
      </div>
      <h2 className="endosos">-Endosos-</h2>
      <div className="endoso">
        {comentarios
          .slice(0)
          .reverse()
          .map((comentario, index) => (
            <p key={index}>
              <strong>De:</strong> {comentario.de} <br />
              <strong>{comentario.comentario}</strong> <br />
              <strong>A:</strong> {comentario.a}
              <div>
                <button onClick={manejarMeGusta}>
                  <span>{contador}</span>
                  <FaThumbsUp className="color" />
                </button>
              </div>
            </p>
          ))}
      </div>
    </div>
  );
}

export default App;
