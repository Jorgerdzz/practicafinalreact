import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import DetailsEquipo from './DetailsEquipo';

export default class Router extends Component {
  render() {

    function DetailsEquipoElement(){
        let {idequipo} = useParams();
        return(<DetailsEquipo idequipo={idequipo}/>)
    }

    return (
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:idequipo' element={<DetailsEquipoElement/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
