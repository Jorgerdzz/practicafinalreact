import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import DetailsEquipo from './DetailsEquipo';
import Jugadores from './Jugadores';

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

    return (
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:idequipo' element={<DetailsEquipoElement/>}/>
        <Route path='/jugadores/:idequipo' element={<JugadoresElement/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
