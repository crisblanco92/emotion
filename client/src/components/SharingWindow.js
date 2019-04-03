import React, { Component } from 'react'
	import AuthService from './Auth/AuthService'
  import { Link } from 'react-router-dom'
  import Share from '../components/Share'

	
	class SharingWindow extends Component {
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
      console.log('he clickado en submit')
	    return(
	      <div className="sharingwindow-container">
	        <h3 className="results">Your results will be shared for a global view</h3>

	        <form onSubmit={this.props.handleSubmit} className="sharing-form">
					
          <a>
             <Link to='/share' className="btn-sharing">Submit</Link>
          </a>
          <a>
             <Link to='/' className="no" >No</Link>
          </a>
	
	        </form>
	      </div>
	    )
	  }
	}
	
	export default SharingWindow