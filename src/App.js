import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.contacts.map(x => {
              return <div>Name: {x.name}, E-mail: {x.email}</div>
            })}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
