import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getUserData } from './helpers/getUserData'
import { users } from './interfaces/usersInterfaces'


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
   <div className='App'>
    <h1>Fetching</h1>
    {
      users.map(user=>(
        <article>
          <h1>Name: {user.name}</h1>
          <p>Race: {user.race}</p>
          <p>Ki: {user.ki}</p>
          <p>Gender: {user.gender}</p>
          <img src={user.image} alt="character" />
        </article>
  ))
    }
   </div>
  )
}

export default App


/** Consume este endpoint https://dragonball-api.com/api/characters
 * Necesito name, ki, race, Namekian, gender, Male, image 
 * Agrega CSS para que se vean legibles, puedes usar bootstrap
 * Crear variable de entorno para usar la API
 */