import React, { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import "../style.css";

function App() {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [de, setDe] = useState("");
  const [a, setA] = useState("");
  const [like, setLikes] = useState("");

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
  1;

  const handleComentarioSubmit = (e) => {
    e.preventDefault();
    if (nuevoComentario.trim() !== "") {
      const nuevoComentarioObjeto = {
        contenido: nuevoComentario,
        de: de,
        a: a,
        likes: like,
      };
      setComentarios((prevComentarios) => {
        const nuevosComentarios = [...prevComentarios, nuevoComentarioObjeto];
        return nuevosComentarios.slice(-3);
      });
      setNuevoComentario("");
      setDe("");
      setA("");
      setLikes("");
    }
  };

  return (
    <div className="container">
      <img className="logo" src="./image/cathy.png" alt="" />
      <h2 className="titulo">Somo los campeones</h2>
      <form className="text-button">
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
        <div className="de-a">
          <label htmlFor="de"></label>
          <input
            id="de"
            type="text"
            placeholder="De"
            value={de}
            onChange={(e) => setDe(e.target.value)}
          />
          <label htmlFor="a"></label>
          <input
            id="a"
            type="text"
            placeholder="A"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </div>
        <button onClick={handleComentarioSubmit}>Publicar</button>
      </form>
      <h2 className="endosos">-Endosos-</h2>
      <div className="endoso">
        {comentarios.map((comentario, index) => (
          <div key={index} className="comentario">
            <p className="contenido">{comentario.contenido}</p>
            <p className="info">
              <span className="nombre">{comentario.de}</span> a{" "}
              <span className="nombre">{comentario.a}</span>
            </p>
            <div className="acciones">
              <p>
                <AiFillHeart /> {comentario.likes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import "../style.css";

// function App() {
//   const [comentarios, setComentarios] = useState([]);
//   const [nuevoComentario, setNuevoComentario] = useState("");
//   const [de, setDe] = useState("");
//   const [a, setA] = useState("");

//   useEffect(() => {
//     const comentariosGuardados = localStorage.getItem("comentarios");
//     if (comentariosGuardados) {
//       setComentarios(JSON.parse(comentariosGuardados));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("comentarios", JSON.stringify(comentarios));
//   }, [comentarios]);

//   const handleComentarioChange = (event) => {
//     setNuevoComentario(event.target.value);
//   };

//   const handleComentarioSubmit = (e) => {
//     e.preventDefault();
//     if (nuevoComentario.trim() !== "") {
//       const nuevoComentarioObjeto = {
//         contenido: nuevoComentario,
//         de: de,
//         a: a,
//         likes: 0,
//       };
//       setComentarios((prevComentarios) => {
//         const nuevosComentarios = [...prevComentarios, nuevoComentarioObjeto];
//         return nuevosComentarios.slice(-3);
//       });
//       setNuevoComentario("");
//       setDe("");
//       setA("");
//     }
//   };
//   // const handleComentarioSubmit = (event) => {
//   //   event.preventDefault();
//   //   setComentarios((prevComentarios) => {
//   //     const nuevosComentarios = [...prevComentarios, nuevoComentario];
//   //     return nuevosComentarios.slice(-3); // Mostrar solo los últimos tres comentarios
//   //   });
//   //   setNuevoComentario("");
//   // };

//   const handleLike = (index) => {
//     setComentarios((prevComentarios) => {
//       const nuevosComentarios = [...prevComentarios];
//       nuevosComentarios[index].likes += 1;
//       return nuevosComentarios;
//     });
//   };

//   return (
//     <div className="container">
//       <img className="logo" src="./image/cathy.png" alt="" />
//       <h2 className="titulo">Somo los campeones</h2>
//       <form className="text-button">
//         <div className="textarea">
//           <label htmlFor="text-area"></label>
//           <textarea
//             id="text-area"
//             placeholder="Escribe tu comentario aquí"
//             value={nuevoComentario}
//             onChange={handleComentarioChange}
//             rows={3}
//             cols={20}
//           />
//         </div>
//         <div className="de-a">
//           <label htmlFor="de"></label>
//           <input
//             id="de"
//             type="text"
//             placeholder="De"
//             value={de}
//             onChange={(e) => setDe(e.target.value)}
//           />
//           <label htmlFor="a"></label>
//           <input
//             id="a"
//             type="text"
//             placeholder="A"
//             value={a}
//             onChange={(e) => setA(e.target.value)}
//           />
//         </div>
//         <button onClick={handleComentarioSubmit}>Publicar</button>
//       </form>
//       <h2 className="endosos">-Endosos-</h2>
//       <div className="endoso">
//         {comentarios.map((comentario, index) => (
//           <div key={index} className="comentario">
//             <p className="contenido">{comentario.contenido}</p>
//             <p className="info">
//               <span className="nombre">{comentario.de}</span> a{" "}
//               <span className="nombre">{comentario.a}</span>
//             </p>
//             <div className="acciones">
//               <button onClick={() => handleLike(index)}>
//                 Me gusta ({comentario.likes})
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
