import logo from './logo.svg';
import './App.css';


import Car from "./Components/Car";

function App() {
  const myCars = [
    { name: "Fusca", km: 10000, color: "Azul"},
    { name: "Polo", km: 0, color: "Preta"},
    { name: "RAM", km: 32000, color: "Branca"},
  ]
  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <Car car={car} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
