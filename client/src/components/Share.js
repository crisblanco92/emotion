import React, { Component } from 'react'
import AuthService from './Auth/AuthService'
import Modal from 'react-modal'
import FinalForm from './FinalForm';

const customStyles2 = {
	content: {
      top: '-6%',
      left: '0',
			right: 'auto',
      bottom: 'auto',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      padding: '0',
      backgroundColor: 'black',
	}
}

export default class Share extends Component {

  constructor(props) {
    super(props)
    this.state = {
      allFormsFromAllUsers: undefined,
      filteredForms: undefined,
      modalIsOpen: false,
      showFinalForm: false,
    }
    this.service = new AuthService()
  }

  componentDidMount() {
    this.service.getFormsUsers()
      .then(response => this.setState({ ...this.state, allFormsFromAllUsers: response }))
  }


  filterButtons = (emCounter, rtCounter) => {

    let copyAllForms = [...this.state.allFormsFromAllUsers]

    let filteredForms = copyAllForms.filter(user => user.test.percentage.emotionalCounter === emCounter && user.test.percentage.rationalCounter === rtCounter)

    this.setState({ ...this.state, filteredForms })


  };



  openModal = (user) => {
    this.setState({ selectedUser: user, modalIsOpen: true, showFinalForm: true });
  
  }
  
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }



  render() {

    console.log(this.state.filteredForms)
    console.log(this.props)
    return (
      <section className="share-container">
        <article className="e-y-r">
          <p className="letra-e">E</p>
          <p className="letra-r">R</p>
        </article>

        <article className="list">
          <div className="porcentajes">
            <p className="primero">0</p>
            <p className="segundo">100</p>
          </div>

          <div className="porcentajes">
            <p className="primero">10</p>
            <p className="segundo">90</p>
          </div>

          <div className="porcentajes">
            <p className="primero">20</p>
            <p className="segundo">80</p>
          </div>

          <div className="porcentajes">
            <p className="primero">30</p>
            <p className="segundo">70</p>
          </div>

          <div className="porcentajes">
            <p className="primero">40</p>
            <p className="segundo">60</p>
          </div>

          <div className="porcentajes">
            <p className="primero">50</p>
            <p className="segundo">50</p>
          </div>

          <div className="porcentajes">
            <p className="primero">60</p>
            <p className="segundo">40</p>
          </div>

          <div className="porcentajes">
            <p className="primero">70</p>
            <p className="segundo">30</p>
          </div>

          <div className="porcentajes">
            <p className="primero">80</p>
            <p className="segundo">20</p>
          </div>

          <div className="porcentajes">
            <p className="primero">90</p>
            <p className="segundo">10</p>
          </div>

          <div className="porcentajes">
            <p className="primero">100</p>
            <p className="segundo">0</p>
          </div>

        </article>

        <div className="circulos">
          <div className="circulo1">
            <button onClick={() => this.filterButtons(0, 100)}> </button>
          </div>
          <div className="circulo2">
            <button onClick={() => this.filterButtons(10, 90)}></button>
          </div>
          <div className="circulo3">
            <button onClick={() => this.filterButtons(20, 80)}></button>
          </div>
          <div className="circulo4">
            <button onClick={() => this.filterButtons(30, 70)}></button>
          </div>
          <div className="circulo5">
            <button onClick={() => this.filterButtons(40, 60)}></button>
          </div>
          <div className="circulo6">
            <button onClick={() => this.filterButtons(50, 50)}></button>
          </div>
          <div className="circulo7">
            <button onClick={() => this.filterButtons(60, 40)}></button>


          </div>

          <div className="circulo8">
            <button onClick={() => this.filterButtons(70, 30)}></button>
          </div>
          <div className="circulo9">
            <button onClick={() => this.filterButtons(80, 20)}></button>
          </div>
          <div className="circulo10">
            <button onClick={() => this.filterButtons(90, 10)}></button>
          </div>
          <div className="circulo11">
            <button onClick={() => this.filterButtons(100, 0)}></button>
          </div>

        </div>


        <div className="linea"></div>



        {this.state.filteredForms !== undefined && (
          <div class="circulos-container">
            
                  {this.state.filteredForms.map(user => 
                    <div className="cada-circulo circulo4">
                    <button onClick={() => this.openModal(user)}></button>
                    </div>)}

                    <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles2}>  
                    <button className="close-btn" onClick={() => this.closeModal()}>X</button>
								    {this.state.showFinalForm && <FinalForm setUser={this.setTheUser} getUser={this.getUser} user={this.state.selectedUser} /> }
								
							    </Modal>

        </div>)}
          
      </section>
    )
  }
}
