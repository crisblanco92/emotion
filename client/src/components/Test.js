import React, { Component } from 'react'

import AuthService from './Auth/AuthService'

export default class Test extends Component {

  constructor(){
    super()
    
    this.state = {
      answersGiven : [],

    }

    this.service = new AuthService()
    this.getPollas()
    

  }

  getPollas = () => {
    this.service.getAllConceptNames()
      .then(response => {//console.log(response)
          this.setState(
            {...this.state , response:response}
          )})
      .catch(err => console.log(err))

  }

//   componentDidMount() {

//     this.service.getAllConceptNames(this.props.match.params.id)
//         .then(response => this.setState({ response: response }))
// }

accumulateAnswers = () => {
  
}



  render() {

    if (this.state.response) {
      console.log(this.state.response)
      return (
        <div>
          <h1>Test</h1>
         
  
              <button>{this.state.response[0].pairOfConcepts[0].concept1.name}</button>
              <button>{this.state.response[0].pairOfConcepts[0].concept2.name}</button>

      
        </div>
      )
    } else {

      return (
        <div>
          <h1>loading</h1>
        </div>
      )

    }
  }
}
