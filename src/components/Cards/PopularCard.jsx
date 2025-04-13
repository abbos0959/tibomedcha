import React from "react";
import "../Cards/card.css";
import { Card, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const PopularCard = ({ val }) => {
   console.log(val.url, "vallllll");

   return (
      <>
         <Card className="rounded-2 shadow-sm popular">
            <iframe
               width="560"
               height="315"
               src={val.url}
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerPolicy="strict-origin-when-cross-origin"
               allowFullScreen
            ></iframe>
         </Card>
      </>
   );
};

export default PopularCard;
