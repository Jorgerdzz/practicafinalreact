import React, { Component } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios';
import logo from '../assets/images/champions.webp'
import BuscarJugador from './BuscarJugador';

export default class Menu extends Component {

    url = Global.apiApuestas;

    cajabuscar = React.createRef();

    state = {
        equipos: [],
        nombre: "",
    }

    loadEquipos = () => {
        let request = "api/Equipos";
        axios.get(this.url + request).then(response=>{
            this.setState({
                equipos: response.data
            })
        })
    }

    buscarPorNombre = (e) => {
      e.preventDefault();
      let nombre = this.cajabuscar.current.value;
      this.setState({nombre: nombre}, () => {
        this.setState({
          nombre: ""
        })
      })
    }

    componentDidMount = () =>{
        this.loadEquipos();
    }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg mb-4" style={{backgroundColor: "#e3f2fd"}}>
          <div className="container-fluid">
            <img src={logo} style={{width:"80px", height:"70px"}}/>
            <NavLink className="navbar-brand" to="#">Champions</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/apuestas"}>Apuestas</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Equipos
                  </NavLink>
                  <ul className="dropdown-menu">
                    {
                        this.state.equipos.map((equipo, index)=>{
                            return(
                                <li key={index}><NavLink to={"/detailsequipo/" + equipo.idEquipo} className='dropdown-item'>{equipo.nombre}</NavLink></li>
                            )
                        })
                    }
                  </ul>
                </li>
              </ul>
              <form className="d-flex w-25" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar jugador por nombre..." aria-label="Search" ref={this.cajabuscar}/>
                <button onClick={this.buscarPorNombre} className="btn btn-outline-primary" type="submit">Buscar</button>
              </form>
              {
                this.state.nombre != "" &&
                <Navigate to={"/buscarjugador/" + this.state.nombre}/>
              }
            </div>
          </div>
        </nav>
      </div>
      
    )
  }
}
