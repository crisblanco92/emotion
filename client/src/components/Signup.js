import React, { Component } from 'react'
	import AuthService from './Auth/AuthService'
	import { Link } from 'react-router-dom'

	
	class Signup extends Component {
	  constructor(props){
	    super(props)
	    this.state = { username: '', password: '', email: '', age: '', location: '' }
			this.service = new AuthService()
			console.log(props)
	  }
	
	  handleFormSubmit = (event) => {
	    event.preventDefault()
	    const username = this.state.username
			const password = this.state.password
			const age = this.state.age
			const location = this.state.location
			const email = this.state.email

			this.service.signup(username, password, age, location, email)
				.then( response => {
						this.setState({
								username: "", 
								email: "",
								password: "",
								age: "",
								location: ""
						})
						this.props.getUser(response)
					})
					// TODO: recoger errores del back
				.catch(err => console.log('pete: ', err))
		}
		
	
	  handleChange = (event) => {  
			const {name, value} = event.target
			console.log(name, value, {[name]: value})
	    this.setState({[name]: value})
		}

	
	
	  render(){
	    return(
<div className="signup-container">


                <h1></h1>
                <div className="row">
                    <div className="col-sm-12">
												<form onSubmit={this.handleFormSubmit} className="signup-form">
                            <div className="form-group">
														<div className="rowForm">
																<label>Email:</label>
																<input type="text" name="email" className="signup-box" value={this.state.email} autoComplete="off" onChange={ e => this.handleChange(e)}/>
														</div>										
														<div className="rowForm">
																<label>Password:</label>
																<input type="password" name="password" className="signup-box" placeholder="*******" autoComplete="off" value={this.state.password} onChange={ e => this.handleChange(e)} />
														</div>										
														<div className="rowForm">
																<label>Username:</label>
																<input type="text" name="username" className="signup-box" placeholder="How you want to be seen, no spaces" autoComplete="off" value={this.state.username} onChange={ e => this.handleChange(e)}/>
														</div>										
														<div className="rowForm">
																<label>From:</label>
																<input type="text" name="location" className="signup-box" placeholder="Madrid, Spain" value={this.state.location} autoComplete="off" onChange={ e => this.handleChange(e)}/>
														</div>										
														<div className="rowForm">
																<label>Age:</label>
																<input type="text" name="age" className="signup-box" value={this.state.age} autoComplete="off" onChange={ e => this.handleChange(e)}/>
														</div>										


																<input type="submit" value="Sign up" className="btn-signup"/>
														</div>
												</form>		
														
										</div>
								</div>
								{/* <div className="form-group">
									<small>Already have account? 
											<Link to={"/login"}> Login</Link>
									</small>
								</div> */}
			
</div>




	    )
	  }
	}
	
	export default Signup