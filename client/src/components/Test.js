import React, { Component } from 'react'

import AuthService from './Auth/AuthService'

export default class Test extends Component {

  constructor(){
    super()
    
    this.state = {
      answersGiven : []

    }

    this.service = new AuthService()
    this.getPollas()
    

  }

  getPollas = () => {
    this.service.getAllConceptNames()
      .then(response => {console.log(response)
          this.setState(
            {...this.state , response:response}
          )})
      .catch(err => console.log(err))

  }

  componentDidMount() {

    this.service.getAllConceptNames(this.props.match.params.id)
        .then(response => this.setState({ response: response }))
}





  render() {
    return (
      <div>
        <h1>Test</h1>
       

            <button>{this.state.response.pairOfConcepts[0].concept1.name}</button>
            <button>pollas</button>
    
      </div>
    )
  }
}
