import React, { Component } from 'react';
//import logo from './logo.svg';
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
    console.log('A form was submitted with a name: ' + this.state.firstName)
    event.preventDefault();
  };

  render(){
    return (
       <form onSubmit={this.handleSubmit}>
       <div className="Form-row">
          <label>
            First name:
            <input name="firstName" type="text" value={this.state.value} onChange={this.handleInputChange} />
          </label>
        </div>
        <div className="Form-row">
          <label>
            Last name:
            <input name="lastName" type="text" value={this.state.value} onChange={this.handleInputChange} />

          </label>
          </div>
          <div className="Form-row">
            <input type="submit" value="Submit" />
          </div>
        </form>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <p className="App-intro">
        </p>
        <ConfigForm/>
      </div>
    );
  }
}

export default App;
