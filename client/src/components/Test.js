import React, { Component } from 'react'

import AuthService from './Auth/AuthService'
import Signup from '../components/Signup'

export default class Test extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      
      answersGiven : [],
      answerIndex: 0,
      rationalCounter : 0,
      emotionalCounter: 0
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
      //console.log('he clickado')
  let answersCopy = [...this.state.answersGiven]

    answersCopy.push(response);

    this.setState({

      ...this.state,  answersGiven: answersCopy, answerIndex: this.state.answerIndex+1}, () => {
          if (this.state.answerIndex >= 10 ) this.saveTest()
        
         // console.log('ha terminado el test', this.state.answersIndex)

      })
    }
    

saveTest = () => {
  const filteredArray = this.state.answersGiven.map(userResponse => userResponse._id)
  //console.log(this.state.answersGiven)
  //console.log(filteredArray)


  let rationalCounter = 0
  let emotionalCounter = 0

    this.state.answersGiven.forEach((answer) => {

      if (answer.concept === "rational") {
        console.log('resultado de la iteracion', answer.concept)

        rationalCounter += 10
        console.log('contador rational:', rationalCounter)
      } else {
        emotionalCounter += 10
        console.log('contador emotional:', emotionalCounter)
        }
      
    });


  this.service.postAnswers(filteredArray) 
  this.setState({
    ...this.state, emotionalCounter , rationalCounter
  })
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
              <div className="botones-test">
              <button className="btn-respuesta1" onClick={(e) => this.accumulateAnswers(this.state.response[this.state.answerIndex].pairOfConcepts[0].concept1)}>{this.state.response[this.state.answerIndex].pairOfConcepts[0].concept1.name}</button>
            
              <button className="btn-respuesta2" onClick={(e) => this.accumulateAnswers(this.state.response[this.state.answerIndex].pairOfConcepts[0].concept2)}>{this.state.response[this.state.answerIndex].pairOfConcepts[0].concept2.name}</button>
              </div>
            </React.Fragment>
       : 
            <div>
              {this.state.answersGiven.map(answer => (
                <React.Fragment>
                  <img src={answer.imageURL} className="img-selected" />
                 


                </React.Fragment>
                
                ))}
                  <p className="fin-name">{this.props.userInSession.username}, {this.props.userInSession.age}</p>
                  <p className="fin-loc">{this.props.userInSession.location}</p>
                  <p className="emo-percent"><span>E - {this.state.emotionalCounter}</span></p>
                  <p className="rat-percent"><span>R - {this.state.rationalCounter}</span></p>

                  <button className="share-btn">share</button>

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