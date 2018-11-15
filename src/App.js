import React, { Component } from "react";
import Lamp from "./Lamp";
import GenerateQuote from "./components/api/GenerateQuote"
import DisplayQuote from "./components/api/DisplayQuote"



const sampleQuote = {
  quote: "test",
  character:"rttt"
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      quote:  sampleQuote
    };
  }

  getQuote() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quote:  data[0]
        });
    });
}





  render() {
    return (
      <div className="App">
        <Lamp on />
        <Lamp />
        <GenerateQuote selectQuote={() =>  this.getQuote()} />
        <DisplayQuote quote={this.state.quote} />
      </div>
    );
  };
}

export default App;