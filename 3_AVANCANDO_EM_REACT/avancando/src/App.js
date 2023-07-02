import logo from './logo.svg';
import './App.css';

import City from './assets/city.jpeg';
import ManageData from './componentes/ManageData';
import ListRender from './componentes/ListRender';

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
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
