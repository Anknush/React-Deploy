import React from "react";
import "./card-main-style.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.movie.id}?set=set2`} alt=""></img>
      <h1>{props.movie.name}</h1>
      <h3>{props.movie.email}</h3>
    </div>
  );
};
export default Card;
