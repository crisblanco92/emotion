import React, { Component } from 'react'
import AuthService from './Auth/AuthService'

export default class Share extends Component {

  constructor(props) {
    super(props)
    this.state = {
      allFormsFromAllUsers: undefined
    }
    this.service = new AuthService()
  }

  componentDidMount() {
    this.service.getFormsUsers()
    .then(response => this.setState({...this.state, allFormsFromAllUsers: response}))
  }





  render() {
    return (
      <section className="share-container">
        <article className="e-y-r">
          <p className="letra-e">E</p>
          <p className="letra-r">R</p>
        </article>

        <article className="list">
          <div className="porcentajes">
            <p className="primero">0</p>
            <p className="segundo">100</p>
          </div>

          <div className="porcentajes">
            <p className="primero">10</p>
            <p className="segundo">90</p>
          </div>

          <div className="porcentajes">
            <p className="primero">20</p>
            <p className="segundo">80</p>
          </div>

          <div className="porcentajes">
            <p className="primero">30</p>
            <p className="segundo">70</p>
          </div>

          <div className="porcentajes">
            <p className="primero">40</p>
            <p className="segundo">60</p>
          </div>

          <div className="porcentajes">
            <p className="primero">50</p>
            <p className="segundo">50</p>
          </div>

          <div className="porcentajes">
            <p className="primero">60</p>
            <p className="segundo">40</p>
          </div>

          <div className="porcentajes">
            <p className="primero">70</p>
            <p className="segundo">30</p>
          </div>

          <div className="porcentajes">
            <p className="primero">80</p>
            <p className="segundo">20</p>
          </div>

          <div className="porcentajes">
            <p className="primero">90</p>
            <p className="segundo">10</p>
          </div>

          <div className="porcentajes">
            <p className="primero">100</p>
            <p className="segundo">0</p>
          </div>
   
        </article>
      
      <div className="circulos">
        <div className="circulo1">
        <button onClick={()=>console.log(0,100)}></button>
        </div>
        <div className="circulo2">
        <button onClick={()=>console.log(10,90)}></button>
        </div>
        <div className="circulo3">
        <button onClick={()=>console.log(20,80)}></button>
        </div>
        <div className="circulo4">
        <button onClick={()=>console.log(30,70)}></button>
        </div>
        <div className="circulo5">
        <button onClick={()=>console.log(40,60)}></button>
        </div>
        <div className="circulo6">
        <button onClick={()=>console.log(50,50)}></button>
        </div>
        <div className="circulo7">
        <button onClick={()=>console.log(60,40)}></button>
        </div>
        <div className="circulo8">
        <button onClick={()=>console.log(70,30)}></button>
        </div>
        <div className="circulo9">
        <button onClick={()=>console.log(80,20)}></button>
        </div>
        <div className="circulo10">
        <button onClick={()=>console.log(90,10)}></button>
        </div>
        <div className="circulo11">
        <button onClick={()=>console.log(100,0)}></button>
        </div>

      </div>


        <div className="linea"></div>

                          {/* <p className="fin-name">{this.props.userInSession.username}, {this.props.userInSession.age}</p> */}

      </section>
    )
  }
}
