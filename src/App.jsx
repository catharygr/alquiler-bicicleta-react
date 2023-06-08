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
  const [meGustaLista, setMeGustaLista] = useState([]);
  const [contadorLista, setContadorLista] = useState([]);

  const handleComentario = (e) => {
    const { name, value } = e.target;
    setNuevoComentario((oldComentario) => ({
      ...oldComentario,
      [name]: value,
    }));
  };

  const manejarMeGusta = (index) => {
    setContadorLista((oldContadores) => {
      const nuevosContadores = [...oldContadores];
      if (meGustaLista[index]) {
        nuevosContadores[index] -= 1;
      } else {
        nuevosContadores[index] += 1;
      }
      return nuevosContadores;
    });

    setMeGustaLista((oldMeGusta) => {
      const nuevosMeGusta = [...oldMeGusta];
      nuevosMeGusta[index] = !nuevosMeGusta[index];
      return nuevosMeGusta;
    });
  };

  const handleClick = () => {
    const comentario = { ...nuevoComentario };

    setComentarios((oldComentarios) => {
      const nuevosComentarios = [comentario, ...oldComentarios].slice(0, 3);
      return nuevosComentarios;
    });

    setContadorLista((oldContadores) => {
      const nuevosContadores = [0, ...oldContadores];
      return nuevosContadores;
    });

    setMeGustaLista((oldMeGusta) => {
      const nuevosMeGusta = [false, ...oldMeGusta];
      return nuevosMeGusta;
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
  };

  return (
    <div className="container">
      <img
        className="logo"
        src="./image/cathy.png"
        alt="Imagen de una persona"
      />
      <h2 className="titulo">Somos los campeones</h2>
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
            <div className="comentarios" key={index}>
              <p>De: {comentario.de}</p>
              <p>A: {comentario.a}</p>
              <p>{comentario.comentario}</p>
              <div>
                <span>{contadorLista[index]}</span>
                <button onClick={() => manejarMeGusta(index)}>
                  <FaThumbsUp className="color" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
