import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

export default class NuevaApuesta extends Component {

    url = Global.apiApuestas;

    cajausuario = React.createRef();
    cajaresultado = React.createRef();
    cajafecha = React.createRef();

    state = {
        status: false
    }

    insertApuesta = (e) => {
        e.preventDefault();
        let apuesta = {
            usuario: this.cajausuario.current.value,
            resultado: this.cajaresultado.current.value,
            fecha: this.cajafecha.current.value
        }
        let request = "api/Apuestas";
        axios.post(this.url + request, apuesta).then(response=>{
            Swal.fire({
                icon: 'success',
                title: 'Apuesta realizada correctamente',
                timer: 3000,
                timerProgressBar: true,
            }).then(()=>{
                this.setState({
                    status: true
                })
            })
        })
    }

  render() {
    return (
      <div className='mx-auto'>
        {
            this.state.status &&
            <Navigate to={"/apuestas"}/>
        }
        <h1>Nueva apuesta</h1>
        <form onSubmit={this.insertApuesta}>
            <label>Usuario: </label>
            <input type='text' ref={this.cajausuario} className='form-control'></input>
            <label>Resultado:</label>
            <input type='text' ref={this.cajaresultado} className='form-control'></input>
            <label>Fecha:</label>
            <input type='text' ref={this.cajafecha} className='form-control'></input> <br></br>
            <button className='btn btn-primary'>Nueva apuesta</button>
        </form>
      </div>
    )
  }
}
