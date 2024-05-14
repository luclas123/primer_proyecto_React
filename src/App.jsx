import { Component  } from 'react'
import Contador from './componentes/Contador';
import './App.css';
import Formulario from './componentes/Formulario';

// const contadores =['alumnos', 'profesores', 'aulas']

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contadores: {nombre:nombre,
        valor:valor
      }
    }
  }

  guardar(nombre, valor){
    let nuevosContadores = this.state.contadores;
    nuevosContadores.push(nombre, valor);
    this.setState({contadores: nuevosContadores});
  }

  eliminar(index){
    let nuevosContadores = this.state.contadores;
    nuevosContadores.splice(index, 1);
    this.setState({contadores: nuevosContadores});
  

  }
  
 
  render(){
    return(
        <div className='contenedor'>
       <Formulario
       guardar={(nombre, valor)=> this.guardar(nombre, valor)}
      
       />
      <div className='listacontadores'>
        {this.state.contadores.map((cont, index)=>

<Contador key={index}>{cont}</Contador>
        )}

      </div>
        </div>
    )
  }
}
