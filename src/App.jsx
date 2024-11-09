import "./styles/App.css";
import Card from "./Components/Card";
import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [nombre, setNombre] = useState("")
  const [pais, setPais] = useState("")
  const [beatle, setBeatle] = useState("")

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (
      nombre.length >= 3 && 
      !nombre.startsWith(" ") &&
      pais.length >= 6 &&
      beatle.length >= 4
    ) {
      setShow(true);
    } else {
      setError(true);
    }
  };
  
  return (
    <div className="card">
      <Header />
      {show ? <Card nombre={nombre} pais={pais} beatle={beatle} /> : (
        <form className="formContent" onSubmit={handleSubmit}>
          <p>Registrate para unirte a la comunidad:</p>
          <div>
            <label >Nombre:</label>
            <input type="text" onChange={(e) => setNombre( e.target.value )} />
          </div>
          <div>
            <label >Pais:</label>
            <input type="text" onChange={(e) => setPais( e.target.value )} />
          </div>
          <div>
            <label >Beatle favorito:</label>
            <input type="text" onChange={(e) => setBeatle( e.target.value )}/>
          </div>
          <button>Enviar</button>
          {error && (
              <h4 className="error">
                Por favor, coloque la información correctamente
              </h4>
            )}
        </form>
      )}
      
    </div>
  );
}

export default App;
