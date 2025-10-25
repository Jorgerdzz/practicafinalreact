import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios';

export default class DetailsJugador extends Component {

    url = Global.apiApuestas;

    state = {
        jugador: []
    }

    loadJugador = () => {
        let request = "api/Jugadores/" + this.props.idjugador
        axios.get(this.url + request).then(response=>{
            this.setState({
                jugador: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadJugador();
    }

  render() {
    return (
        <div style={{width:"30%", margin: "auto"}}>
            <h1>{this.state.jugador.nombre}</h1>
            <div className="card" style={{width: "18rem"}}>
                <img src={this.state.jugador.imagen} className="card-img-top" alt={this.state.jugador.nombre}></img>
                <div className="card-body">
                    <h5 className="card-title">{this.state.jugador.posicion}</h5>
                    <p className="card-text">Fecha nacimiento: {this.state.jugador.fechaNacimiento}</p>
                    <p className="card-text">Pais: {this.state.jugador.pais}</p>
                    <NavLink to={"/jugadores/" + this.state.jugador.idEquipo} className="btn btn-success">Jugadores</NavLink>
                </div>
            </div>
        </div>
      
    )
  }
}
