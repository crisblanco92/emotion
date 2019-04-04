import React, { Component } from 'react'

import AuthService from './Auth/AuthService'


export default class MyResult extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      formsForFinalResult : undefined,
      porcentajes : undefined
    }

    this.service = new AuthService()
  }


  componentDidMount() {
    this.service.getUserForFinalResult()
      .then(response => {
        this.setState({ 
        ...this.state, formsForFinalResult: response, porcentajes: response.test.percentage
        })
        console.log('...',this.state.formsForFinalResult)
      })
      
    }
    
    
    
    
    
    
    
    render() {
      if (this.state.formsForFinalResult) {
        return (

        <div className="result-container">
              {this.state.formsForFinalResult.test.concepts.map((answer, idx) => {
                console.log('resultado del mapeo:', answer)
                return <div key={idx} className="img-selected-container fadeIn">
                
                 <img src={answer.imageURL} className="img-selected"/>

             
                </div> })}
         
                  <p className="fin-name">{this.props.userInSession.username}, {this.props.userInSession.age}</p>
                  <p className="fin-loc">{this.props.userInSession.location}</p>     
                  <p className="emo-percent"><span>E - {this.state.porcentajes.emotionalCounter}</span></p>
                  <p className="rat-percent"><span>R - {this.state.porcentajes.rationalCounter}</span></p>

                 })}

        </div>

      )
    } else {

      return (
          <div>
            <h1 className="loading">loading</h1>
          </div>
        )

      }
    } 
  }
