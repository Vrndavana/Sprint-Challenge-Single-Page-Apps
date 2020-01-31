import React from "react";


export default function CharacterCard() {
  return (
    <div classNAme="character-card"> 
    <Card>
      <CardImg top-width="100" src= {props.image} alt="Card image"/>
      <Cardbody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>Status: {props.status}</CardText>
        <CardText>Species: {props.species}</CardText>
        <CardText>Gender: {props.gender}</CardText>
      </Cardbody>
    </Card>
    </div>
  
);

}
