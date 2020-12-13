import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

export default class Favorites extends Component {

  // state = {
  //   favorite: true
  // }

  renderCardsToFaves = () => {
    if (this.props.favedBeyCards.length > 0) {
     return this.props.favedBeyCards.map(beyObj => <BeyCard key={beyObj.id} beyObj={beyObj} removeABeyCard={this.props.removeABeyCard}/>)
    }
  }

  render() {
    // console.log(this.props.favedBeyCards)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderCardsToFaves()}
      </div>
    );
  }
}


