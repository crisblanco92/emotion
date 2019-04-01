import React, { Component } from 'react'

import AuthService from './Auth/AuthService'
import Signup from '../components/Signup'

export default class Test extends Component {

  constructor(){
    super()
    
    this.state = {
      
      answersGiven : [],
      answerIndex: 0

    }

    this.service = new AuthService()
    this.getConcepts()

  }

  getConcepts = () => {
    this.service.getAllConceptNames()
      .then(response => {//console.log(response)
          this.setState(
            {...this.state , response: response, answerIndex: 0}
          )})
      .catch(err => console.log(err))

  }

//   componentDidMount() {

//     this.service.getAllConceptNames(this.props.match.params.id)
//         .then(response => this.setState({ response: response }))
// }

accumulateAnswers = response => {
      console.log('he clickado')
  let answersCopy = [...this.state.answersGiven]

    answersCopy.push(response);

    this.setState({

      ...this.state,  answersGiven: answersCopy, answerIndex: this.state.answerIndex+1}, () => {
          if (this.state.answerIndex >= 10 ) this.saveTest()
        
         // console.log('ha terminado el test', this.state.answersIndex)

      })
    }
    

saveTest = () => {
  const filteredArray = this.state.response.map(userResponse => userResponse._id)
  console.log(this.state.response)
  console.log(filteredArray)

  this.service.postAnswers(filteredArray) 
}


    
    
    render() {
      
      console.log(this.state.answersGiven)
      if (this.state.response) {
      //console.log(this.state.response)
      return (
        <div className="Test">
          <h1></h1>

          {this.state.answerIndex < 10 ?  
            <React.Fragment>
              <button onClick={(e) => this.accumulateAnswers(this.state.response[this.state.answerIndex].pairOfConcepts[0].concept1)}>{this.state.response[this.state.answerIndex].pairOfConcepts[0].concept1.name}</button>
              <button onClick={(e) => this.accumulateAnswers(this.state.response[this.state.answerIndex].pairOfConcepts[0].concept2)}>{this.state.response[this.state.answerIndex].pairOfConcepts[0].concept2.name}</button>
            </React.Fragment>
       : 
            <div>
              {this.state.answersGiven.map(answer => (
                <React.Fragment>
                  <img src={answer.imageURL} className="img-selected" />
                  <p className="fin">{answer.name}</p>
                </React.Fragment>
                ))}
            </div>
          }
         
  
         
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
