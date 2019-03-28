import React, { Component } from 'react'
	import './App.css' 
	import { Switch, Route } from 'react-router-dom'
	import Signup from './components/Signup'
	import Login from './components/Login'
	import NavBar from './components/NavBar'
	
	class App extends Component {
	  constructor(props){
	    super(props)
	    this.state = { loggedInUser: null }
	  }
	
	  getTheUser= (userObj) => {
	    this.setState({
	      loggedInUser: userObj
	    })
	  }
	
	  render() {
	    return (
	      <div className="App">
	        <NavBar/>
	        <header className="App-header">
	          <Switch>
	            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
	            <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
	          </Switch>
	        </header>
	      </div>
	    )
	  }
	}
	
	export default App 