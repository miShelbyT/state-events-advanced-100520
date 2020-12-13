import React from "react";

class BeyCard extends React.Component {

  state = {
    favorite: false
  }


  localfaveABeyCard = () => {
    if (this.props.beyObj.favorite === false) {
      this.props.faveABeyCard(this.props.beyObj)
      this.props.beyObj.favorite = true
      console.log(this.props.beyObj.favorite)
    }
  }

  localremoveABeyCard = () => {
    if (this.props.beyObj.favorite === true){
      this.props.removeABeyCard()
    //   this.props.removeABeyCard(this.props.beyObj)
    }
  }


  // else if (this.props.beyObj.favorite === true) {
  //   this.props.beyObj.favorite = false
  // }


  // this.setState(prevState => ({ favorite: !prevState.favorite }))
  // window.alert("I got a hot sauce 🌶 💃🏽 in my bag, swag")


  render() {
    return (

      <div className="card">
        <h2>{this.props.beyObj.name}</h2>
        <img onClick={this.localremoveABeyCard} onClick={this.localfaveABeyCard} src={this.props.beyObj.img} alt={this.props.beyObj.name} />
      </div>
    );

  }

};

export default BeyCard;
