import React, { Component } from 'react'

import AuthService from './Auth/AuthService'
import Modal from 'react-modal'
import Home from '../components/Home'
import SharingWindow from './SharingWindow';




const customStyles = {
	content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
      width: '40%',
      backgroundColor: 'black'
	}
}



export default class Test extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      
      answersGiven : [],
      answerIndex: 0,
      emotionalCounter: 0,
      rationalCounter : 0
      //showShareWindow : false
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


  let emotionalCounter = 0
  let rationalCounter = 0

    this.state.answersGiven.forEach((answer) => {

      if (answer.concept === "emotional") {
        console.log('resultado de la iteracion', answer.concept)

        emotionalCounter += 10
        console.log('contador emotional:', emotionalCounter)
      } else {
        rationalCounter += 10
        console.log('contador rational:', rationalCounter)
        }
      
    });


  this.service.postAnswers(filteredArray, emotionalCounter, rationalCounter) 

  this.setState({
    ...this.state, emotionalCounter , rationalCounter
  })
}



showShareWindow = () => {
  this.setState({ modalIsOpen: true, showShareWindow: true });

}

closeModal = () => {
  this.setState({ modalIsOpen: false });
}



    
    
    render() {
      
      if (this.state.response) {
      //console.log(this.state.response)
      return (
        <div className="Test fadeIn">
          <h1></h1>

          {this.state.answerIndex < 10 ?  
            <React.Fragment>
              <div className="botones-test">
              <button className="btn-respuesta1" onClick={(e) => this.accumulateAnswers(this.state.response[this.state.answerIndex].pairOfConcepts[0].concept1)}>{this.state.response[this.state.answerIndex].pairOfConcepts[0].concept1.name}</button>
            
              <button className="btn-respuesta2" onClick={(e) => this.accumulateAnswers(this.state.response[this.state.answerIndex].pairOfConcepts[0].concept2)}>{this.state.response[this.state.answerIndex].pairOfConcepts[0].concept2.name}</button>
              </div>
            </React.Fragment>
       : 
            <div className ="img-selected-container fadeIn">
              {this.state.answersGiven.map(answer => (
                <React.Fragment>
                  <img src={answer.imageURL} className="img-selected"/>
                 


                </React.Fragment>
                
                ))}
                  <p className="fin-name">{this.props.userInSession.username}, {this.props.userInSession.age}</p>
                  <p className="fin-loc">{this.props.userInSession.location}</p>
                  <p className="emo-percent"><span>E - {this.state.emotionalCounter}</span></p>
                  <p className="rat-percent"><span>R - {this.state.rationalCounter}</span></p>

                  <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
								    {this.state.showShareWindow ? <SharingWindow setUser={this.setTheUser} getUser={this.getUser}/> : <Home getUser={this.setTheUser} />}
								
							    </Modal>

                  <button className="sharefromtest-btn" onClick={(e) => this.showShareWindow(this.state.openModal)}>share</button>

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
