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
                        <img src="/public/logo-21.svg" alt="triangle with equal sides" srcset="logo-21.svg" className="logo"/>
                        </a> 
                </div>
                <div className="nav-left">
                        <a>
                            <Link to='/'>CREATE</Link>
                        </a>
                        <a>
                            <Link to='/'>SHARE</Link>
                        </a>
                        <a>
                            <Link to='/'>THE PROJECT</Link>
                        </a>
                  
                </div>
                <div className="nav-right">
                        <a>
                            <Link to="#">
                           Hello, <span>{this.state.loggedInUser.username} </span>!
                           </Link>
                        </a>
                        <a>
                          <Link to='/'>
                              <a href="#" onClick={() => this.logoutUser()}>LOG OUT</a>
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
                        <img src="/public/logo-21.svg" alt="triangle with equal sides" srcset="logo-21.svg" className="logo"/>
                        </a> 
                </div>
                <div className="nav-left">
                  
                      <a>
                          <Link to='/signup'>CREATE</Link>
                      </a>
                      <a>
                          <Link to='/'>SHARE</Link>
                      </a>
                      <a>
                          <Link to='/theproject'>THE PROJECT</Link>
                      </a>
                  
                </div>
                <div className="nav-right">

                    <button onClick={this.props.showSignup}>SIGN UP</button>

                    <button onClick={this.props.showLogin}>LOG IN</button>
                  
                      {/* <a>
                          <Link to='/signup'>SIGN UP</Link>
                      </a>
                      <a>
                          <Link to='/login'>LOG IN</Link>
                      </a> */}
                  
                </div>
                  
              </section>
          )
      }
  }

}

export default NavBar