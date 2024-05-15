import { Component  } from 'react'
import Boton from './Boton';

export default class Contador extends Component{
constructor(props){
  super(props);
  this.state = {valor: props.valorInicial}
}
restar(){
  this.setState({valor: this.state.valor -1})
}
sumar(){
 this.setState({valor: this.state.valor +1 })
}
multiplicar(){
  this.setState({valor: this.state.valor * this.props.valorInicial})
}
dividir(){
  this.setState({valor: this.state.valor / this.props.valorInicial})
}


render(){
  return(
    <div className='contador'>
      <span className='titulo'>{this.props.children}</span>
      <span className='valor'>{this.state.valor}</span>
       <div className='botonera'>
        <Boton simbolo='-'
        accion={()=> this.restar()}/>
        <Boton simbolo='+'
        accion={()=> this.sumar()} />
        <Boton simbolo='x2'
        accion={()=> this.multiplicar()} />
        <Boton simbolo='/2'
        accion={()=> this.dividir()} />
        <Boton simbolo='x'
        accion={()=> this.props.eliminar()}/>

       </div>
    </div>
  )
}
}
 
