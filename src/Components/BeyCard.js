import React from "react";

function BeyCard (props) {


  function localClickHandler(){
      props.clickHandler(props.beyObj)
      // console.log(props.beyObj)
    }

  
    return (

      <div className="card">
        <h2>{props.beyObj.name}</h2>
        <img onClick={localClickHandler} src={props.beyObj.img} alt={props.beyObj.name} />
      </div>
    );

};

export default BeyCard;
