import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class DetailsEquipo extends Component {

    url = Global.apiApuestas;

    state = {
        equipo: []
    }

    loadEquipo = () => {
        let request = "api/Equipos/" + this.props.idequipo
        axios.get(this.url + request).then(response=>{
            this.setState({
                equipo: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEquipo();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idequipo != this.props.idequipo){
            this.loadEquipo();
        }
    }

  render() {
    return (
        <div className='row justify-content-center'>
            <h1 className='text-center'>{this.state.equipo.nombre}</h1>
            <div className="card align-items-center" style={{width: "30%"}}>
                <img src={this.state.equipo.imagen} className="card-img-top" alt={this.state.equipo.nombre} style={{width: "150px"}}></img>
                <div className="card-body">
                    <h5 className="card-title">Champions: {this.state.equipo.champions}</h5>
                    <p className="card-text">{this.state.equipo.descripcion}</p>
                    <div className='row'>
                        <div className='col-6 d-grid'>
                            <NavLink to={"/jugadores/" + this.state.equipo.idEquipo} className="btn btn-success">Jugadores</NavLink>
                        </div>
                        <div className='col-6 d-grid'>
                            <NavLink to={"/"} className="btn btn-primary">Volver</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
  }
}
