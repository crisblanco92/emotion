import React, { Component } from 'react'
	import AuthService from './Auth/AuthService'
	import { Link } from 'react-router-dom'
	
	class Signup extends Component {
	  constructor(props){
	    super(props)
	    this.state = { username: '', password: '' }
	    this.service = new AuthService()
	  }
	
	  handleFormSubmit = (event) => {
	    event.preventDefault()
	    const username = this.state.username
	    const password = this.state.password
	console.log("juju")
	    this.service.signup(username, password)
	    .then( response => {
	        this.setState({
	            username: "", 
	            password: ""
	        })
	        this.props.getUser(response)
	    })
	    .catch( error => console.log(error) )
	  }
	
	  handleChange = (event) => {  
	    const {name, value} = event.target
	    this.setState({[name]: value})
	  }
	
	  render(){
	    return(
<div className="container">
                <h1>Formulario de registro</h1>
                <div className="row">
                    <div className="col-sm-12">
												<form onSubmit={this.handleFormSubmit} className="signup-form">
                            <div className="form-group">
																<label>Username:</label>
																<input type="text" name="username" value={this.state.username} autoComplete="off" onChange={ e => this.handleChange(e)}/>
																<label>Password:</label>
																<input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
											
																<input type="submit" value="Signup" />
														</div>
												</form>		
														
										</div>
								</div>
								<div className="form-group">
									<p>Already have account? 
											<Link to={"/login"}> Login</Link>
									</p>
								</div>
</div>




	    )
	  }
	}
	
	export default Signup