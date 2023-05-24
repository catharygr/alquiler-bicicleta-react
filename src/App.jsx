import React from "react";
import "../style.css";

function App() {
  return (
    <div className="container">
      <img className="logo" src="./image/cathy.png" alt="" />
      <h2 className="titulo">Somo los campeones</h2>
      <div className="text-button">
        <div className="textarea">
          <textarea
            placeholder="Escribe su coemntario aquí"
            rows={3}
            cols={20}
          />
        </div>
        <button>Pública</button>
      </div>
      <h2 className="endosos">-Endosos-</h2>
    </div>
  );
}

export default App;
