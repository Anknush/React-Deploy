import React from "react";
import "./card-component.css";
import Card from "./card/card-main-component";
export const CardApp = (props) => {
  return (
    <div className="card-main">
      {" "}
      {props.Movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}{" "}
    </div>
  );
};
