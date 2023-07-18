import logo from './logo.svg';
import './App.css';
import Myform from './components/Myform';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <Myform user={{name: "Marcos",
       email: "marcos-bizzarri@hotmail.com",
        bio: "Sou um desenvolvedor",
         role: "admin"}} />
    </div>
  );
}

export default App;
