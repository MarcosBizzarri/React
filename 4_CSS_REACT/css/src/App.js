import './App.css';
import MyComponent from './Componentes/MyComponent';

import { useState } from "react";
import Title from "./componentes/Title";


function App() {
   const n = 15
   const [name] = useState("Marcos")

   const redTitle = false 

  return (
  <div ClassName="App">
    <h1>React com CSS</h1>
     { /*CSS de componente */ }
    <MyComponent />
    <p>Este parágrafo é do App.js</p>
    <p style={{ 
      color: "blue", 
      padding: "25px", 
      borderTop: "2px solid red",
      }}
       
      >
        Este elemento foi estilizado de forma inline
      </p>

      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>

      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>

      <h2 style={
        name === "Marcos" 
        ? {color: "green", backgroundColor: "#000"}
        : null
    
    }
    >
      Teste nome</h2>

      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      <Title />

      
      
    
  </div>
  )
  

}

export default App;
