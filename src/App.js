import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ConfigForm extends Component{
  constructor(props){
    super(props);

    this.state = {name: ''};
  }

  handleNameChange = (event) => {
    console.log('Not about to crash..');
    this.setState({name: event.target.value});
    console.log('State changed to ' + event.target.value);
  };

  handleSubmit = (event) => {
    console.log('A form was submitted with a name: ' + this.state.name)
    event.preventDefault();
  };

  render(){
    return (
       <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleNameChange} />
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
