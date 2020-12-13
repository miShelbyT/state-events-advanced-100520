import React from "react";
import BeyCard from '../Components/BeyCard'
import beyArray from '../api'

class BeyContainer extends React.Component {

beyCard = () => {
  // console.log(this.props)
  return beyArray.map(beyObj => <BeyCard key={beyObj.id} beyObj={beyObj} faveABeyCard={this.props.faveABeyCard}/>)
}


  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.beyCard()}
      </div>
    );
  }
}

export default BeyContainer;
