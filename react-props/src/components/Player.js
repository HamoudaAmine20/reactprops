
import React from "react";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
  
  <Card  style={{ width: '30rem' , color:'blue',fontFamily:'cursive'}} >
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Team: {team}<br />
        Nationality: {nationality} <br />
          Jersey Number: {jerseyNumber} <br />
          Age: {age }{" year"}<br />
        </Card.Text>
      </Card.Body>
     
    </Card>
    
  );





};

export default Player;
