import React, { Component } from 'react'
	import AuthService from './Auth/AuthService'
	import { Link } from 'react-router-dom'

	
	class Signup extends Component {
	  constructor(props){
	    super(props)
	    this.state = { username: '', password: '', email: '', age: '', location: '' }
			this.service = new AuthService()

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
				.catch(err => console.log('pete', err.response.data.message))
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
																<label>Email:</label>
																<input type="text" name="email" className="signup-box" value={this.state.email} autoComplete="off" onChange={ e => this.handleChange(e)}/>
																<br/><br/> <br/>
																<label>Password:</label>
																<input type="password" name="password" className="signup-box" placeholder="*******" autoComplete="off" value={this.state.password} onChange={ e => this.handleChange(e)} />
																<br/><br/> <br/>
																<label>Name:</label>
																<input type="text" name="username" className="signup-box" placeholder="How you want to be seen" autoComplete="off" value={this.state.username} onChange={ e => this.handleChange(e)}/>
																<br/><br/> <br/>
																<label>From:</label>
																<input type="text" name="location" className="signup-box" placeholder="Where are you from?" value={this.state.location} autoComplete="off" onChange={ e => this.handleChange(e)}/>
																<br/><br/> <br/>
																<label>Age:</label>
																<input type="text" name="age" className="signup-box" value={this.state.age} autoComplete="off" onChange={ e => this.handleChange(e)}/>
																<br/><br/> <br/>


																<input type="submit" value="Sign up" className="btn btn-outline-dark"/>
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