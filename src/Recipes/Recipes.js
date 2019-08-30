import React from "react";
import "./recipes.css";

const Recipe = props => {
  return (
    <div className={recipe}>
      <h1>{props.title}</h1>
      <ol>
        {props.ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{props.calories}</p>
      <img src={`${props.image}`} alt={`${props.label}`} />
    </div>
  );
};

export default Recipe;
