import React, { Component } from 'react'
import imagen from '../assets/images/OIP.webp'

export default class Home extends Component {
  render() {
    return (
      <div style={{margin:"auto", width: "50%"}}>
        <img src={imagen} style={{width: "100%"}}></img>
      </div>
    )
  }
}
