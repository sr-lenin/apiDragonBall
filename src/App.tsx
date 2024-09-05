import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getUserData } from './helpers/getUserData'
import { users } from './interfaces/usersInterfaces'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/images/logo_dragonballapi.jpg';



function App() {
 /*  interface AppState{
    usersState: users[]
  } */
  const [users, setUsers] = useState<users[]>([])

useEffect(() =>{
  const data = async() =>{
    const users = await getUserData()
    setUsers(users)
  }
  data()
},[])
  return (
        <div className='App container'>
          <h1 className="text-center my-4">Dragon Ball</h1>
          <img src={logo} width={"700px"} ></img>
          <div className="row">
            {users.map((user, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <article className="card">
                  <img src={user.image} alt="character" className="card-img-top" />
                  <div className="card-body">
                    <h2 className="card-title">Name: {user.name}</h2>
                    <p className="card-text">Race: {user.race}</p>
                    <p className="card-text">Ki: {user.ki}</p>
                    <p className="card-text">Gender: {user.gender}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default App;


/** Consume este endpoint https://dragonball-api.com/api/characters
 * Necesito name, ki, race, Namekian, gender, Male, image 
 * Agrega CSS para que se vean legibles, puedes usar bootstrap
 * Crear variable de entorno para usar la API
 */