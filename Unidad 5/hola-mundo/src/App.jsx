import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AcercaDe from './components/AcercaDe'
import Saludar from './components/Saludar'
import './App.css'
import { userState } from "react";

function App() {
  /* const usuario = {
    nombre: "Mario Souto",
    edad: 19,
    color: "Rojo"
  };
  return (
    <>
      <Saludar userinfo={usuario} />
    </>
  ) */
  const [contador, setContador] = useState(0)
  return(
    <>
      <h1>Estado simple: {contador}</h1>
      <button onClick={() => setContador(contador+1)}>
        Cambio de estado
      </button>
    </>
  )
}
export default App;