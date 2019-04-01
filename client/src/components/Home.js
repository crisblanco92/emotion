import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      

    }
  }


  render() {
  //  console.log(this.props)
    return (

      
      <div className="main-images">
    
      <h1>emotion is an online tool that transforms your <br/> rational and emotional level into visual forms</h1>
          <img src="/project-forms/formas-cuadrado-10.svg" alt="" className="main-image1"/>
          <img src="/project-forms/formas-cuadrado-16.svg" alt="" className="main-image2"/>
          <img src="/project-forms/formas-cuadrado-12.svg" alt="" className="main-image3"/>

          {this.props.goToTest ? <button className="btn create btn-dark"><Link to='/test'>test</Link></button> : <button onClick={this.props.openModal}  className="btn create btn-dark" >create</button>}
  
  
      </div>
    )
  }
}
