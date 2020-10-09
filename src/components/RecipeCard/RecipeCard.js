import React, { Component } from 'react';
import './RecipeCard.css';
import { Button, Card, Elevation } from "@blueprintjs/core";

class RecipeCard extends React.Component {
  render() {
    const {
      title,
      image,
      url,
      description,
      servings,
      prepTime,
      dietLabel,
      calories,
      recipeCategory,
      cookingMethod,
      rating,
      ingredients,
    } = this.props.data;

    return (
      <Card className="RecipeCard" elevation={Elevation.TWO}>
        <div className="title-image">
          <h2>{title}</h2>
          <img src={image} alt="some good shit" width="300" height="300"/>
        </div>
        <div className="description">
          <div className="item">
            <h5>Servings: {servings}</h5>
          </div>
          <div className="item">
            <h5>Calories: {calories}</h5>
          </div>
          <div className="item">
            <h5>Prep Time: {prepTime} min</h5>
          </div>
        </div>
      </Card>
    )
  }
}

export default RecipeCard
