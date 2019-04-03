import React, { Component } from 'react'
	import AuthService from './Auth/AuthService'
  import { Link } from 'react-router-dom'
  import Share from '../components/Share'

	
	class FinalForm extends Component {
	  constructor(props){
      super(props)
      this.state = {
        
      }
	    this.service = new AuthService()
	  }
  
    

    handleSubmit = e => {
      e.preventDefault()
      this.showShareComponent()
    }
    

	  render(){
      console.log(this.props.test)
	    return(
	      <div className="sharingwindow-container">
	      
	      </div>
	    )
	  }
	}
	
	export default FinalForm