import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Apuestas extends Component {

    url = Global.apiApuestas;

    state = {
        apuestas: []
    }

    loadApuestas = () =>{
        let request = "api/Apuestas"
        axios.get(this.url + request).then(response=>{
            this.setState({
                apuestas: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadApuestas();
    }

  render() {
    return (
      <div className='m-5' style={{margin: "auto"}}>
        <div className='justify-content-center'>
            
            <h1 style={{color: "red"}}>Local: Real Madrid, Visitante: FC Barcelona</h1>
        </div>
        <table className='table table-primary text-center'>
            <thead>
                <tr>
                    <th>USUARIO</th>
                    <th>RESULTADO</th>
                    <th>FECHA</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.apuestas.map((apuesta, index)=>{
                        return(
                            <tr key={index}>
                                <td>{apuesta.usuario}</td>
                                <td>{apuesta.resultado}</td>
                                <td>{apuesta.fecha}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div className='d-grid'>
            <NavLink to={"/realizarapuesta"} className="btn btn-danger">Realizar apuesta</NavLink>
        </div>
      </div>
    )
  }
}
