import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    handleNameChange = (event) => {
       console.log('Not about to crash..');
       this.setState({name: event.target.value});
       console.log('State changed to ' + this.state.name);
    };

  constructor(props){
    super(props);

    this.state = {name: ''};

    // instead using fat arrow functions to bind this
    //this.handleNameChange = this.handleNameChange.bind(this);    
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleNameChange(event) {
  //   console.log('About to crash..');
  //   this.setState({value: event.target.value});
  // }

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
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleNameChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
