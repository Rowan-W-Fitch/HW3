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
        <h4>{title}</h4>
        <img src={image} alt="some good shit" width="200" height="200"/>
        <h5>Servings: {servings}</h5>
        <h5>Calories: {calories}</h5>
        <h5>Prep Time: {prepTime} min</h5>
      </Card>
    )
  }
}

export default RecipeCard
