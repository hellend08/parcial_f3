import "./styles/App.css";
import Card from "./Components/Card";

function App() {
  let saludo = "Hola a todos"
  return (
    <div className="card">
      <h1>Carga de estudiantes</h1>
      <form></form>
      <Card saludo={saludo}/>
    </div>
  );
}

export default App;
