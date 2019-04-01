import React, { Component } from 'react'
import './App.css' 

import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Modal from 'react-modal'

import Signup from './components/Signup'
import Login from './components/Login'
import NavBar from './components/NavBar'
import TheProject from './components/TheProject'
import Test from './components/Test'
import Home from './components/Home'



import AuthService from './components/Auth/AuthService';
	

const customStyles = {
	content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			width: '40%'
	}
}

Modal.setAppElement('#root')




	class App extends Component {

	  constructor(props){
	    super(props)
			this.state = { 
				loggedInUser: null, 
				modalIsOpen: false, 
				showLogin: false

			}
			this.service = new AuthService()
			this.openModal = this.openModal.bind(this)
		//	this.closeModal = this.closeModal.bind(this)
		}
		
		fetchUser() {
			if (this.state.loggedInUser === null) {
				this.service.loggedin()
					.then(response => this.setState({ loggedInUser: response }))
					.catch(x => this.setState({ loggedInUser: false }))
			}
		}
	
	  getUser= (userObj) => {
	    this.setState({
	      loggedInUser: userObj
	    })
		}
		
		setTheUser = (userObj) => {
			this.setState({ loggedInUser: userObj })
		}
	

	openModal = () => {
		this.setState({ modalIsOpen: true, showLogin: false });
}

showLogin = () => {
	this.setState({ modalIsOpen: true, showLogin: true });
}

closeModal = () => {
		this.setState({ modalIsOpen: false });
}



handleSubmit = e => {
	e.preventDefault()
	this.closeModal()
}



	
	  render() {

			this.fetchUser()

			if (!this.state.loggedInUser) {
				return (
					<main>

						
						<NavBar userInSession={this.state.loggedInUser} showSignup={this.openModal} showLogin={this.showLogin}  />
							<div className="main-container">						
							{/* <Test /> */}

							{/* <Home openModal={this.openModal} /> */}

							
							{/* <button onClick={this.openModal} className="btn create btn-dark">create</button> */}
							<Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
								{this.state.showLogin ? <Login setUser={this.setTheUser} getUser={this.getUser}/> : <Signup setUser={this.setTheUser} />}
								
							</Modal>

									<Switch>
										<Route exact path='/signup' render={() => <Signup setUser={this.setTheUser} />} />
										<Route exact path='/login' render={() => <Login setUser={this.setTheUser} getUser={this.getUser}/>} />
										<Route exact path='/theproject' render={() => <TheProject setUser={this.setTheUser} getUser={this.getUser}/>} />
										<Route exact path='/' render={() => <Home setUser={this.setTheUser} getUser={this.getUser} openModal={this.openModal}/>} />

									</Switch>

							</div>
					</main>
				)
			} else {
				return (
					<main>
							<div className="main-container">

								<NavBar userInSession={this.state.loggedInUser} setUser={this.setTheUser} closeModal={this.closeModal}/>

								

								{/* <Home openModal={this.openModal} /> */}

								<Switch>
								<Route exact path='/theproject' render={() => <TheProject setUser={this.setTheUser} getUser={this.getUser}/>} />
								<Route exact path='/test' render={() => <Test setUser={this.setTheUser} getUser={this.getUser}/>} />
								<Route exact path='/' render={() => <Home setUser={this.setTheUser} getUser={this.getUser}  goToTest={true}/>} />

								</Switch>

							</div>
					</main>
				)
			}
		}
	}


	export default App 