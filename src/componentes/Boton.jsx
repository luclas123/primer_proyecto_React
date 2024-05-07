import { Component } from "react";

export default class Boton extends Component{
    constructor(props){
        super(props);
    }
 render(){
    return(
        <span className='boton'
        onClick={()=> this.props.accion()}>
            {this.props.simbolo}
        </span>
    )
 }


}