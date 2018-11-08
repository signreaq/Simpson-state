import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Working from "./Lamp";


import Quote from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  }

  isWorking = () => {
    this.setState({ working: !this.state.working });
    
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working ? "App-logo2" : "App-logo"} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>

  <Working on={this.state.working} />
  <button onClick={this.isWorking}>
  <h1>work</h1>
  </button>


        <Quote/>
        
      </div>
    );
  }
}

export default App;