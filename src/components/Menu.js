import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios';
import logo from '../assets/images/champions.webp'

export default class Menu extends Component {

    url = Global.apiApuestas;

    state = {
        equipos: []
    }

    loadEquipos = () => {
        let request = "api/Equipos";
        axios.get(this.url + request).then(response=>{
            this.setState({
                equipos: response.data
            })
        })
    }

    componentDidMount = () =>{
        this.loadEquipos();
    }

  render() {
    return (
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
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
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
  }
}
