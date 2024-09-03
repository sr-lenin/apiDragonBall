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
          <p>Id: {user.id}</p>
          <h1>Name: {user.name}</h1>
          <p>Ki: {user.ki}</p>
          <img src={user.image} alt="character" />
        </article>
  ))
    }
   </div>
  )
}

export default App
