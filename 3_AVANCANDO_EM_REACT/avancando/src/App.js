import logo from './logo.svg';
import './App.css';

import City from './assets/city.jpeg';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      { /* Imagem em public  */}
      <div>
         <img src="/img11.jpg" alt="Paisagem" />
      </div>
      { /* Imagem em asset */}
      <div>
       <img src={City} alt="Cidade" />
      </div>
      
    </div>
  );
}

export default App;
