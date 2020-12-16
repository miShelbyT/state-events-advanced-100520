import React from "react";
import BeyCard from '../Components/BeyCard'


function BeyContainer (props) {

const renderBeyCard = () => {
  // console.log(props.api)
  return props.api.map(beyObj => <BeyCard key={beyObj.id} beyObj={beyObj} clickHandler={props.clickHandler}/>)
}


  
    return (
      <div className="index">
        <h1>Index</h1>
        {renderBeyCard()}
      </div>
    );
}

export default BeyContainer;
