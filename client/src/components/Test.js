import React, { Component } from 'react'

import AuthService from './Auth/AuthService'
import Signup from '../components/Signup'

export default class Test extends Component {

  constructor(){
    super()
    
    this.state = {
      
      answersGiven : [],

    }

    this.service = new AuthService()
    this.getConcepts()

  }

  getConcepts = () => {
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

accumulateAnswers = (e) => {
      console.log('he clickado')
  let answersCopy = [...this.state.answersGiven]

  //console.log(this.state.response)
  if ( e.target.name === "modern" )  answersCopy.push(this.state.response[0].pairOfConcepts[0].concept1.name) 
  if ( e.target.name === "classic" ) answersCopy.push('quetal') 

    this.setState({
      ...this.state,  answersGiven: answersCopy})
    }
    
    
    
    render() {
      
      console.log(this.state.answersGiven)
      if (this.state.response) {
      //console.log(this.state.response)
      return (
        <div>
          <h1></h1>
         
  
      <button name="modern" onClick={(e) => this.accumulateAnswers(e)} render={() => <Signup setUser={this.setTheUser}/> }> {this.state.response[0].pairOfConcepts[0].concept1.name} </button>
              <button name="classic" onClick={(e) => this.accumulateAnswers(e)}>{this.state.response[0].pairOfConcepts[0].concept2.name}</button>

      
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
