import React from "react";


export default function CharacterCard(props) {
  return (
    <div classNAme="character-card"> 
    <div>
      <img top-width="100" src= {props.image} alt="Card image"/>
      <div>
        <p>{props.name}</p>
        <pt>Status: {props.status}</pt>
        <pt>Species: {props.species}</pt>
        <pt>Gender: {props.gender}</pt>
      </div>
    </div>
    </div>
  
);

}
