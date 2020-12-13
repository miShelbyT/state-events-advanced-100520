import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'

class App extends React.Component {

  state = {
    favedBeyCards: []
  }

  faveABeyCard = (beyObj) => {
      // console.log("I am working in the BeyCard Component", beyObj)
      this.setState(prevState => ({
        favedBeyCards: [...prevState.favedBeyCards, beyObj]
      }))
  }

  removeABeyCard = (beyObj) => {
    console.log("I am removing a bey card eventually...")
  }

  render() {
    return (
      <div className="container" >
        <BeyContainer faveABeyCard={this.faveABeyCard} />
        <Favorites favedBeyCards={this.state.favedBeyCards} removeABeyCard={this.removeABeyCard} />
      </div>
    );
  }
};

export default App;
