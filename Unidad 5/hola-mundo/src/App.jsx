import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AcercaDe from './components/AcercaDe'
import Saludar from './components/Saludar'
import './App.css'

function App() {
  const usuario = {
    nombre: "Mario Souto",
    edad: 19,
    color: "Rojo"
  };
  return (
    <>
      <Saludar userinfo={usuario} />
    </>
  ) 
}
export default App;