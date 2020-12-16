import React from "react";
import BeyCard from '../Components/BeyCard'

function Favorites(props) {

  const renderCardsToFaves = () => {
    if (props.favedBeyCards.length > 0) {
     return props.favedBeyCards.map(beyObj => <BeyCard key={beyObj.id} beyObj={beyObj} clickHandler={props.clickHandler}/>)
    }
  }
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {renderCardsToFaves()}
      </div>
    );
}

export default Favorites


