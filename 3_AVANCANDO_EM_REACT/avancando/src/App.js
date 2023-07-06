import './App.css';

import City from './assets/city.jpeg';
import ManageData from './componentes/ManageData';
import ListRender from './componentes/ListRender';
import ConditionalRender from './componentes/ConditionalRender';
import ShowUserName from './componentes/ShowUserName';
import { useState } from 'react';
import CarDetails from './componentes/CarDetails';
import Fragment from './componentes/Fragment';
import Container from './componentes/Container';
import ExecuteFunction from './componentes/ExecuteFunction';
import UserDetails from './componentes/UserDetails';




function App() {
  // const name = "Matheus"
  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Honda", color: "Preto", newCar: true, km: 0},
    {id: 3, brand: "GM", color: "Branco", newCar: false, km: 30201},
  ]


   function showMensagem() {
    AbortController.log("Evento do componente pai!")
   }

   const users = [
    { id: 1, name: "Marcos" , job: "Programador", age: 31},
    { id: 2, name: "Maria", job: "Advogada", age: 40},
    { id: 3, name: "Ronaldo", job: "Reporter", age: 36},
    { id: 4, name: "Jéssica", job: "Aluna", age: 14},
   ]

  

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
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      <CarDetails brande="Ford" color="Vermelha" km={0} newCar={true}/>
      <CarDetails brade="Fiat" color="Branco" km={4500} newCar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color}
        km={car.km} 
        newCar={car.newCar} />
      ))}
       {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="testing">
         <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2 ">
         <h2>Testando container</h2>
      </Container>
      <Container myValue="testing 3">
         <h3>Conteainer ok</h3>
      </Container>
      <ExecuteFunction myFunction={showMensagem} />
      {users.map((user) => (
      <UserDetails 
      key={user.id} 
      name={user.name} 
      job={user.job} 
      age={user.age} />
      ))}
    
      
     
      
    </div>
  );
}

export default App;
