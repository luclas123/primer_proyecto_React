import { Component  } from 'react'
import Contador from './componentes/Contador'
import './App.css'

export default class App extends Component{
 
  render(){
    return(
      <div className='listacontadores'>
        <Contador>Profesores</Contador>
        <Contador>Alumnos</Contador>
        <Contador />
        <Contador />
        <Contador />
        <Contador />
        <Contador />
        <Contador />
        <Contador />
        <Contador />

      </div>
    )
  }
}
