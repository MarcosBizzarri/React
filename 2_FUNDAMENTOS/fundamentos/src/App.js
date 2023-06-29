import FirstComponent from './components/FirstComponent';
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import Mycomponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
     <h1>Fundamentos React</h1>
     <FirstComponent />
     <TemplateExpressions />
     <Mycomponent />
     <Events />
     <Challenge />
     
    </div>
  );
}

export default App;
