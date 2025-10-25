import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import DetailsEquipo from './DetailsEquipo';
import Jugadores from './Jugadores';
import DetailsJugador from './DetailsJugador';
import Apuestas from './Apuestas';
import NuevaApuesta from './NuevaApuesta';
import BuscarJugador from './BuscarJugador';

export default class Router extends Component {
  render() {

    function DetailsEquipoElement(){
        let {idequipo} = useParams();
        return(<DetailsEquipo idequipo={idequipo}/>)
    }

    function JugadoresElement(){
        let {idequipo} = useParams();
        return(<Jugadores idequipo={idequipo}/>)
    }

    function DetailsJugadorElement(){
      let {idjugador} = useParams();
      return(<DetailsJugador idjugador={idjugador}/>)
    }

    function BuscarJugadorElement(){
      let {nombre} = useParams();
      return(<BuscarJugador nombre={nombre}/>)
    }

    return (
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detailsequipo/:idequipo' element={<DetailsEquipoElement/>}/>
        <Route path='/jugadores/:idequipo' element={<JugadoresElement/>}/>
        <Route path='/detailsjugador/:idjugador' element={<DetailsJugadorElement/>}/>
        <Route path='/apuestas' element={<Apuestas/>}/>
        <Route path='/realizarapuesta' element={<NuevaApuesta/>}/>
        <Route path='/buscarjugador/:nombre' element={<BuscarJugadorElement/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
