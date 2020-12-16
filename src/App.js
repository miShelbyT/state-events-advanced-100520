import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'


class App extends React.Component {

  state = {
    api: []
  }

  componentDidMount() {
    fetch("http://localhost:4000/beyArray")
      .then(resp => resp.json())
      .then(beyArray => this.setState({ api: beyArray }))
      .catch(console.log)

  }

  faveClickHandler = (beyObj) => {
    let newArray = [...this.state.api]
    let foundObj = newArray.find(bey => bey.id === beyObj.id)
    if (foundObj.favorite === false) {
      foundObj.favorite = true
      this.setState({ api: newArray })
      // console.log(this.state.api)
    }
    else if (foundObj.favorite === true) {
      foundObj.favorite = false
      window.alert("I got a hot sauce 🌶 💃🏽 in my bag, swag")
      this.setState({ api: newArray })
      // console.log(this.state.api)
    }
  }

  favedBeyCards = () => {
    return this.state.api.filter(beyObj => beyObj.favorite === true)
    
  }


  render() {
    return (
      <div className="container" >
        <BeyContainer api={this.state.api} clickHandler={this.faveClickHandler} />
        <Favorites favedBeyCards={this.favedBeyCards()} clickHandler={this.faveClickHandler} />
      </div>
    );
  }
};

export default App;
