import React, { Component } from 'react'
import AuthService from './Auth/AuthService'
	
	class FinalForm extends Component {
	  constructor(props){
      super(props)
      this.state = {
 
      }
	    this.service = new AuthService()
	  }
  
    

    handleSubmit = e => {
      e.preventDefault()
    
    }



	  render(){
      //console.log('las props', this.props)
	    return(
	    
        <section className="finalresult-container">
                 {this.props.user.test.concepts.map((concept,ind) => {
                   //console.log(concept.imageURL)
                    return <div key={ind} className="form-in-modal"> 
                    
                    <img src={concept.imageURL}></img> 
               
                    
                    </div>})} 

                        <p className="final-name">{this.props.user.username}, {this.props.user.age}</p>
                        <p className="final-loc">{this.props.user.location}</p>
                        <p className="final-emo">E {this.props.user.test.percentage.emotionalCounter}</p>
                        <p className="final-rat">R {this.props.user.test.percentage.rationalCounter}</p>

                        

        </section>
	    )
	  }
	}
	
	export default FinalForm