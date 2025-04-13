import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./DestinationCard.css"; // CSS ni alohida yozsangiz, shu faylga yozing

const DestinationCard = ({ destination }) => {
   return (
      <div className="img-box">
         <NavLink className="body-text text-dark text-decoration-none" to="/zakas">
            <Card>
               <Card.Img
                  variant="top"
                  src={destination.image}
                  alt={destination.name}
                  className="img-fluid custom-img"
               />
               <Card.Body>
                  <Card.Title>{destination.name}</Card.Title>
                  <span className="tours">{destination.tours}</span>
               </Card.Body>
            </Card>
         </NavLink>
      </div>
   );
};

export default DestinationCard;
