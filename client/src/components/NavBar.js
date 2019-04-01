import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import AuthService from './Auth/AuthService'


class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = { loggedInUser: null }
        this.service = new AuthService()
    }

    componentDidMount = () => {
        this.setState({...this.state, loggedInUser: this.props.userInSession})
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('componentWillTal')
    //     this.setState({...this.state, loggedInUser: nextProps["userInSession"] })
    // }


    logoutUser = () => {
        this.service.logout()
            .then(() => {
                this.setState({ loggedInUser: null });
                this.props.setUser(null);
                this.props.closeModal();
            })
    }




    render() {

      if (this.state.loggedInUser) {

          return (
              <section className="nav-style">
                <div className="logo-box">
                        <a>
                        <Link to='/'><img src="/public/logo-21.svg" srcset="logo-21.svg" className="logo"/>
                        </Link>
                        </a> 
                </div>
                <div className="nav-left">

                        <a>
                            <Link to='/'>SHARE</Link>
                        </a>
                        <a>
                            <Link to='/theproject'>THE PROJECT</Link>
                        </a>
                  
                </div>
                <div className="nav-right">
                        <a>
                          <Link to='/'>
                                <button className="login-btn" onClick={() => this.logoutUser()}>LOG OUT</button>
                          </Link>
                        </a>
                </div>
              </section>
          )
      }

      else {

          return (
              <section className="nav-style">
                <div className="logo-box">
                <a>
                        <Link to='/'><img src="/public/logo-21.svg" srcset="logo-21.svg" className="logo"/>
                        </Link>
                        </a> 
                </div>
                <div className="nav-left">
                  
                      <a>
                          <Link to='/'>SHARE</Link>
                      </a>
                      <a>
                          <Link to='/theproject'>THE PROJECT</Link>
                      </a>
                  
                </div>
                <div className="nav-right">

                    <button className="signup-btn" onClick={this.props.showSignup}>SIGN UP</button>

                    <button className="login-btn" onClick={this.props.showLogin}>LOG IN</button>
                  
                </div>
                  
              </section>
          )
      }
  }

}

export default NavBar