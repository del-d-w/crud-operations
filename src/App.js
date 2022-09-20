import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ContactItem from './components/ContactItem'

import './App.css'

const initialContactsList = []

class App extends Component {
  state = {
    contactsList: initialContactsList,
    name: '',
  }

  toggleIsFavorite = id => {
    const {contactsList} = this.state
    const filteredUsersData = contactsList.filter(each => each.id !== id)
    this.setState({
      contactsList: filteredUsersData,
    })
  }

  onAddContact = event => {
    event.preventDefault()
    const {name, mobileNo} = this.state
    const newContact = {
      id: uuidv4(),
      name,
      mobileNo,
      isFavorite: false,
    }

    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newContact],
      name: '',
      mobileNo: '',
    }))
  }

  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, contactsList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Contacts</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
            />
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <ul className="contacts-table">
            {contactsList.map(eachContact => (
              <ContactItem
                key={eachContact.id}
                contactDetails={eachContact}
                toggleIsFavorite={this.toggleIsFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
