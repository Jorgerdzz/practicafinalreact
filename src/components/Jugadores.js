import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Jugadores extends Component {

    url = Global.apiApuestas;

    state = {
        jugadores: []
    }

    loadJugadores = () => {
        let request = "api/Jugadores/JugadoresEquipos/" + this.props.idequipo;
        axios.get(this.url + request).then(response=>{
            this.setState({
                jugadores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadJugadores();
    }


  render() {
    return (
      <div style={{margin: "auto", width: "50%"}}>
        <table>
            <thead>
                <tr>
                    <th>NOMBRE</th>
                    <th>IMAGEN</th>
                    <th>DETALLES</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.jugadores.map((jugador, index) => {
                        return(
                            <tr>
                                <td>{jugador.nombre}</td>
                                <td><img src={jugador.imagen} style={{width: "70%"}}></img></td>
                                <td>
                                    <NavLink className='btn btn-danger'></NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
