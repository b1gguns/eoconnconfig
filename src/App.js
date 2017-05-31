import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ConfigForm extends Component{
  constructor(props){
    super(props);

    this.state = {name: ''};
  }

  handleInputChange = (event) => {
    console.log('Enter handleInputChange...');
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({[name]: value});
    console.log('State of ' + name + ' changed to ' + value);
  };

  handleSubmit = (event) => {
    console.log('A form was submitted with a name: ' + this.state.name)
    event.preventDefault();
  };

  render(){
    return (
       <form onSubmit={this.handleSubmit}>
          <label>
            First name:
            <input name="firstName" type="text" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <label>
            Last name:
            <input name="lastName" type="text" value={this.state.value} onChange={this.handleInputChange} />

          </label>
          <input type="submit" value="Submit" />
        </form>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Here we are. This is a progressive web app.
        </p>
        <ConfigForm/>
      </div>
    );
  }
}

export default App;
