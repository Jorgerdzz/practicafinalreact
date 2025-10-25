import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class BuscarJugador extends Component {

    url = Global.apiApuestas;

    state = {
        jugadores: []
    }

    loadJugador = () => {
      let request = "api/Jugadores/BuscarJugadores/" + this.props.nombre;
      console.log(this.props.nombre);
      axios.get(this.url + request).then(response=>{
        console.log(response.data)
        this.setState({
            jugadores: response.data
        })
      })
    }

    componentDidMount = () => {
        this.loadJugador();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.nombre != this.props.nombre){
            this.loadJugador();
        }
    }

  render() {
    return (
        <div>
            <table className='table table-primary'>
                <thead>
                    <tr>
                        <th>NOMBRE</th>
                        <th>IMAGEN</th>
                        <th>DETALLES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.jugadores.map((jugador, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{jugador.nombre}</td>
                                    <td><img src={jugador.imagen} style={{width: "100px"}}></img></td>
                                    <td>
                                        <NavLink to={"/detailsjugador/" + jugador.idJugador} className="btn btn-outline-danger">Detalles</NavLink>
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
