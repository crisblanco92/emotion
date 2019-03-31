import React, { Component } from 'react'
	import AuthService from './Auth/AuthService'
	import { Link } from 'react-router-dom'
	
	class Login extends Component {
	  constructor(props){
	    super(props)
	    this.state = { username: '', password: '' }
	    this.service = new AuthService()
	  }
	
	  handleFormSubmit = (event) => {
	    event.preventDefault()
	    const username = this.state.username
	    const password = this.state.password
	
	    this.service.login(username, password)
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
	      <div className="login-container">
	        <h1></h1>

	        <form onSubmit={this.handleFormSubmit} className="login-form">
	          <label>Username:</label>
	          <input type="text" className="login-box" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/> 
						<br/><br/> <br/>
	          <label>Password:</label>
	          <input type="password" placeholder="********" className="login-box" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
						<br/><br/> <br/>
	          <input type="submit" value="Login" className="btn btn-outline-dark" />
	        </form>
	        {/* <small>Don't have account? 
	            <Link to={"/signup"}> Signup</Link>
	        </small> */}
	      </div>
	    )
	  }
	}
	
	export default Login